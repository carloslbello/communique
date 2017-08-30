class Api::FeedsController < ApplicationController
  def show
    unless current_user
      render json: { errors: ['Not logged in'] }, status: 401
      return
    end
    followed_ids = Follow.where(follower: current_user).pluck(:followed_id)
    post_ids = Post.where(author_id: followed_ids).order(created_at: :desc).limit(8).pluck(:id)
    render json: { post_ids: post_ids }
  end
end
