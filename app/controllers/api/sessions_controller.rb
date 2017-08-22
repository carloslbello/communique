class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username_or_email], params[:user][:password])
    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: { errors: ['Invalid credentials'] }
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
end
