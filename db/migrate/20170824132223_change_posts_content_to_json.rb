class ChangePostsContentToJson < ActiveRecord::Migration[5.1]
  def change
    Post.delete_all
    remove_column :posts, :content
    add_column :posts, :content, :json
  end
end
