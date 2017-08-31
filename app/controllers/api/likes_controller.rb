class Api::LikesController < ApplicationController
  def create
    @post = Post.find(params[:post_id])
    if Like.find_by(user: current_user, post: @post).exists?
      render json: { errors: ['You already like this post'] }, status: 422
      return
    end
    Like.create(user: current_user, post: @post)
    render 'api/posts/show'
  end

  def destroy
    @post = Post.find(parmas[:post_id])
    like = Like.find_by(user: current_user, post: @post)
    unless like.exists?
      render json: { errors: ['You don\'t like this post'] }, status: 422
      return
    end
    like.destroy
    render 'api/posts/show'
  end
end
