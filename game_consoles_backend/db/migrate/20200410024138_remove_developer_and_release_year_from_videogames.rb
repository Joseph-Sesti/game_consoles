class RemoveDeveloperAndReleaseYearFromVideogames < ActiveRecord::Migration[6.0]
  def change

    remove_column :videogames, :developer, :string

    remove_column :videogames, :release_year, :string
  end
end
