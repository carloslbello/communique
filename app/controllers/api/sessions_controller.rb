class Api::SessionsController < ApplicationController
  def create
    final_params = user_params
    @user = User.find_by_credentials(final_params[:username_or_email], final_params[:password])
    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: { errors: ['Invalid credentials'] }, status: 422
    end
  end

  def destroy
    if logged_in?
      logout
      render json: {}
    else
      render json: { errors: ['Not logged in'] }, status: 404
    end
  end

  def user_params
    params.require(:user).permit(:username_or_email, :password)
  end
end
