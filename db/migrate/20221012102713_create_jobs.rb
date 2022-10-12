class CreateJobs < ActiveRecord::Migration[7.0]
  def change
    create_table :jobs do |t|
      t.string :company_name
      t.string :description
      t.string :company_logo
      t.integer :salary
      t.string :website
      t.integer :user_id

      t.timestamps
    end
  end
end
