class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.integer :author_id, null: false
      t.integer :post_id, null: false
      t.json :contents, null: false
    end
    add_index :comments, :author_id
    add_index :comments, :post_id
  end
end
