class AddHeroImageUrlToPosts < ActiveRecord::Migration[5.1]
  def change
    add_column :posts, :hero_image_url, :string
  end
end
