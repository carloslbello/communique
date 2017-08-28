class AddContentTextToPosts < ActiveRecord::Migration[5.1]
  def change
    Post.destroy_all
    add_column :posts, :content_text, :text, null: false
  end
end
