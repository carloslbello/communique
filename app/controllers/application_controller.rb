class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user, :login, :logout, :logged_in?, :user_followed_by_current_user, :post_liked_by_current_user

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def login(user)
    session[:session_token] = user.reset_session_token!
    @current_user = user
  end

  def logout
    session[:session_token] = nil
    @current_user = nil
  end

  def logged_in?
    !!current_user
  end

  def ensure_logged_in
    render json: { errors: ['Not logged in'] }, status: 404 unless logged_in?
  end

  def user_followed_by_current_user(user)
    return nil unless logged_in?
    return !!Follow.find_by(follower: current_user, followed: user)
  end

  def post_liked_by_current_user(post)
    return nil unless logged_in?
    return !!Like.find_by(post: post, user: current_user)
  end
end
