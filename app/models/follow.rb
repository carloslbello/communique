class Follow < ApplicationRecord
  validates :follower, uniqueness: { scope: :followed }

  belongs_to :follower, class_name: :User
  belongs_to :followed, class_name: :User
end
