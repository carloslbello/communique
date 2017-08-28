json.extract!(post, :id, :author_id, :title, :content, :summary)
json.comment_ids post.comments.pluck(:id)
json.tag_names do
  json.array!(post.tags.map { |tag| tag.name })
end
