class Like < ApplicationRecord
  validates :user, uniqueness: { scope: :post }

  belongs_to :user
  belongs_to :post
end
