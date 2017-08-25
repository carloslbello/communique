class ChangeCommentContentsToContent < ActiveRecord::Migration[5.1]
  def change
    rename_column :comments, :contents, :content
  end
end
