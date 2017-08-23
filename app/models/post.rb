class Post < ApplicationRecord
  validates :author, :title, :content, presence: true

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User
end
