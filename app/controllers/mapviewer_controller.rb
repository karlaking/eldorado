class MapviewerController < ApplicationController
   def index
    gon.points = Point.all
    p gon.points
  end
end
