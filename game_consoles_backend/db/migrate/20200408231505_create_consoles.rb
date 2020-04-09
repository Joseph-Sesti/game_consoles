class CreateConsoles < ActiveRecord::Migration[6.0]
  def change
    create_table :consoles do |t|
      t.string :name
      t.string :manufacturer
      t.string :release_year

      t.timestamps
    end
  end
end
