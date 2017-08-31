class CreateHeards < ActiveRecord::Migration[5.1]
  def change
    create_table :heards do |t|
      t.integer :user_id, null: false
      t.integer :post_id, null: false
    end

    add_index :heards, [:user_id, :post_id], unique: true
  end
end
