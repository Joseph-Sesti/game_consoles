class VideogameSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :title
  belongs_to :console
end
