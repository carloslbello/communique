json.extract!(post, :id, :author_id, :title, :content, :summary, :shown_summary, :hero_image_url, :created_at, :updated_at)
json.comment_ids post.comments.pluck(:id)
json.tag_names do
  json.array!(post.tags.map { |tag| tag.name })
end
