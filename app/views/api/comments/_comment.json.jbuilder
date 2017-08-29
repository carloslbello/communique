json.extract!(comment, :id, :author_id, :post_id, :content, :created_at)
json.author_username comment.author.username
