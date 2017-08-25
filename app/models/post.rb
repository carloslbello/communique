class Post < ApplicationRecord
  validates :author, :title, :content, presence: true

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  has_many :taggings

  has_many :tags,
    through: :taggings,
    source: :tag

  has_many :comments,
    inverse_of: :post

  def tag_names=(tag_names)
    self.tags = tag_names.map do |tag_name|
      Tag.find_or_create_by(name: tag_name)
    end
  end
end
