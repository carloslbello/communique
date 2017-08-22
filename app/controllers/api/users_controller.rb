class Api::UsersController < ApplicationController

  def create
    final_params = user_params
    unless final_params[:password] == final_params[:confirm_password]
      render json: { errors: ['Passwords don\'t match'] }, status: 422
      return
    end
    final_params.delete(:confirm_password)
    @user = User.new(final_params)
    if @user.save
      login(@user)
      render 'show'
    else
      render json: { errors: @user.errors.full_messages }, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :password, :confirm_password)
  end
end
