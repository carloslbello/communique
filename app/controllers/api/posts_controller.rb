class Api::PostsController < ApplicationController

  before_action :ensure_logged_in, only: [:create]

  def create
    @post = Post.new(author: current_user, title: params[:post][:title], content: params[:post][:content], tag_names: params[:post][:tag_names] || [], summary: params[:post][:summary], hero_image_url: params[:post][:hero_image_url])
    if @post.save
      render :show
    else
      render json: { errors: @post.errors.full_messages }, status: 422
    end
  end

  def show
    @post = Post.find(params[:id])
  end

  def update
    @post = Post.find(params[:id])
    if @post.author != current_user
      render json: { errors: 'Not authorized' }, status: 401
      return
    end
    @post.title = params[:post][:title]
    @post.content = params[:post][:content]
    @post.tag_names = params[:post][:tag_names]
    @post.summary = params[:post][:summary]
    @post.hero_image_url = params[:post][:hero_image_url]
    if @post.save
      render :show
    else
      render json: { errors: @post.errors.full_messages }, status: 422
    end
  end

  # private
  # def post_params
  #   params.require(:post).permit(:title, :content)
  # end
end
