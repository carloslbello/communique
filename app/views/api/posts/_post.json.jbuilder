json.extract!(post, :id, :author_id, :title, :content)
json.tag_names do
  json.array!(post.tags.map { |tag| tag.name })
end
