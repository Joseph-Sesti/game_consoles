class ConsoleSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name
  has_many :videogames
end
