class VideogameSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :title, :developer, :release_year
  belongs_to :console
end
