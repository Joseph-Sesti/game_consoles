class VideogameSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :title, :console_id
  belongs_to :console
end
