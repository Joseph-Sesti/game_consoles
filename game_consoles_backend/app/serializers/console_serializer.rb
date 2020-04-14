class ConsoleSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :videogames
  has_many :videogames
end
