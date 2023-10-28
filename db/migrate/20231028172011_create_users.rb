class CreateUsers < ActiveRecord::Migration[7.1]
  def change
    create_table :users do |t|
      t.integer :age
      t.integer :weight
      t.integer :height
      t.string :diet_preference
      t.string :sex
      t.timestamps
    end
  end
end
