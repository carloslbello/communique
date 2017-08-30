class Api::SearchesController < ApplicationController
  def show
    render json: { post_ids: Post.search(params[:query]).pluck(:id) }
  end
end
