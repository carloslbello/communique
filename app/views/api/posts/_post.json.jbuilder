json.extract!(post, :id, :author_id, :title, :content, :summary, :shown_summary, :hero_image_url, :created_at, :updated_at)
json.comment_ids post.comments.pluck(:id)
json.tag_names do
  json.array!(post.tags.map(&:name))
end
json.num_likes post.likes.count
json.first_to_like (if post.likes.empty? then nil else post.likes.first.user.username end)
json.liked_by_current_user post_liked_by_current_user(post)
