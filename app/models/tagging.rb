class Tagging < ApplicationRecord
  validates :post, uniqueness: { scope: :tag }

  belongs_to :post
  belongs_to :tag
end
