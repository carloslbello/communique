class AddProfileInformationToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :profile_picture_url, :string
    add_column :users, :bio, :string
  end
end
