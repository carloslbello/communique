class Api::CommentsController < ApplicationController
  before_action :ensure_logged_in, only: [:create]

  def create
    @comment = Comment.new(post: Post.find(params[:post_id]), author: current_user, content: params[:comment][:content])
    if @comment.save
      render :show
    else
      render json: { errors: @comment.errors.full_messages }, status: 422
    end
  end

  def index
    @comments = Post.find(params[:post_id]).comments
  end

end
