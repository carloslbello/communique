class AddTimestampsToPosts < ActiveRecord::Migration[5.1]
  def change
    add_timestamps :posts
  end
end
