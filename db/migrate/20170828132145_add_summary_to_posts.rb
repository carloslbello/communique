class AddSummaryToPosts < ActiveRecord::Migration[5.1]
  def change
    add_column :posts, :summary, :string
  end
end
