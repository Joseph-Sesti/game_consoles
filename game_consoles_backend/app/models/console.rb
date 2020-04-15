class Console < ApplicationRecord
  has_many :videogames
  accepts_nested_attributes_for :videogames
end
