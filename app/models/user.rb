class User < ApplicationRecord
  validates :username, :email, :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :bio, length: { maximum: 140, allow_nil: true }

  after_initialize :ensure_session_token

  attr_reader :password

  has_many :posts,
    class_name: :Post,
    inverse_of: :author

  has_many :followings,
    class_name: :Follow,
    inverse_of: :followed

  has_many :followers,
    through: :followings,
    source: :follower

  has_many :followeds,
    class_name: :Follow,
    inverse_of: :follower

  has_many :followed,
    through: :followeds,
    source: :followed

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end

  def self.find_by_credentials(username_or_email, password)
    user = User.find_by(username: username_or_email) || User.find_by(email: username_or_email)
    if user && user.is_password?(password)
      return user
    else
      return nil
    end
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end
end
