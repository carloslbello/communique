class Api::UsersController < ApplicationController

  def create
    final_params = create_user_params
    unless final_params[:password] == final_params[:confirm_password]
      render json: { errors: ['Passwords don\'t match'] }, status: 422
      return
    end
    final_params.delete(:confirm_password)
    @user = User.new(final_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: { errors: @user.errors.full_messages }, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    unless current_user == @user
      render json: { errors: ['Not authorized'] }, status: 401
      return
    end

    if @user.update(update_user_params)
      render :show
    else
      render json: { errors: @user.errors.full_messages }, status: 422
    end
  end

  private
  def create_user_params
    params.require(:user).permit(:username, :email, :password, :confirm_password)
  end

  def update_user_params
    params.require(:user).permit(:bio, :profile_picture_url)
  end
end
