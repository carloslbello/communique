class Api::TagsController < ApplicationController
  def show
    tag = Tag.find_by(name: params[:name])
    unless tag
      render json: { post_ids: [] }
      return
    end
    render json: { post_ids: tag.posts.order(created_at: :desc).pluck(:id) }
  end
end
