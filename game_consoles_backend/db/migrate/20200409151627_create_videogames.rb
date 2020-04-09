class CreateVideogames < ActiveRecord::Migration[6.0]
  def change
    create_table :videogames do |t|
      t.string :title
      t.string :developer
      t.string :release_year

      t.timestamps
    end
  end
end
