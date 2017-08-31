class Api::FollowsController < ApplicationController
  def create
    @user = User.find(params[:user_id])
    if Follow.find_by(follower: current_user, followed: @user).exists?
      render json: { errors: ['You already follow this user'] }, status: 422
      return
    end
    Follow.create(follower: current_user, followed: @user)
    render 'api/users/show'
  end

  def destroy
    @user = User.find(params[:user_id])
    follow = Follow.find_by(follower: current_user, followed: @user)
    if !follow.exists?
      render json: { errors: ['You don\'t follow this user'] }, status: 422
    end
    follow.destroy
    render 'api/users/show'
  end
end
