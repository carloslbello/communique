class Comment < ApplicationRecord
  validates :author, :post, :content, presence: true

  belongs_to :post, inverse_of: :comments
  belongs_to :author, class_name: :User
end
