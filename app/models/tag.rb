class Tag < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  validate :tag_must_be_only_lowercase_or_digits

  def tag_must_be_only_lowercase_or_digits
    unless self.name =~ /[a-z0-9]+/
      errors.add(:name, 'must contain only lowercase letters or digits')
    end
  end

  has_many :taggings
  has_many :posts,
    through: :taggings,
    source: :post
end
