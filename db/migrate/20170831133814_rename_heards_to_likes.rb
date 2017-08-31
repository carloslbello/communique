class RenameHeardsToLikes < ActiveRecord::Migration[5.1]
  def change
    rename_table :heards, :likes
  end
end
