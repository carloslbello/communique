class Api::SearchesController < ApplicationController
  def show
    render json: { post_ids: Post.search(params[:query]).order(created_at: :desc).pluck(:id) }
  end
end
