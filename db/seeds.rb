require 'json'

def convert_from_json(file)
  points  = File.read(file)
  my_hash = JSON.parse(points)
end

points_hash = convert_from_json('db/groundTruthPoints.json')
features =  points_hash["features"]
puts features


features.each do |point|
  point_num = point["attributes"]["ID"]
  elevation = point["attributes"]["Elevation"]
  datetime = point["attributes"]["DateTimeS"]
  description = point["attributes"]["Description"]
  img_url = point["attributes"]["Image"]
  longitude = point["geometry"]['x']
  latitude = point["geometry"]['y']
  Point.create(point_num: point_num, elevation: elevation, datetime: datetime, description: description, img_url: img_url, longitude: longitude, latitude: latitude)
end
