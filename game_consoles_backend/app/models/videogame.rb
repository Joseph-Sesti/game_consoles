class Videogame < ApplicationRecord
  belongs_to :console, optional: true
end
