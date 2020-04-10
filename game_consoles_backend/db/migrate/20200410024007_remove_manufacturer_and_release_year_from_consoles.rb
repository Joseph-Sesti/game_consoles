class RemoveManufacturerAndReleaseYearFromConsoles < ActiveRecord::Migration[6.0]
  def change

    remove_column :consoles, :manufacturer, :string

    remove_column :consoles, :release_year, :string
  end
end
