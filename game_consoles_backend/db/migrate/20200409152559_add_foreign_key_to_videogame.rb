class AddForeignKeyToVideogame < ActiveRecord::Migration[6.0]
  def change
    add_column :videogames, :console_id, :integer
  end
end
