json.extract!(user, :id, :username, :bio, :profile_picture_url)
json.post_ids user.posts.pluck(:id).reverse
json.followed_by_current_user user_followed_by_current_user(user)
