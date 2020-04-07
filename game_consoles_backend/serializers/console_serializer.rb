class ConsoleSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :manufacturer, :release_year
  has_many :videogame
end
