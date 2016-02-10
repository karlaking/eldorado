$(document).ready(function(){
  L.mapbox.accessToken = 'pk.eyJ1Ijoia2FybGFraW5nMiIsImEiOiJjaWV1d29pZ2QwczhwczltMm1lbWMxZnJmIn0._CLLgaefzXvhtCeSs61tzQ';
  var map = L.mapbox.map('map', 'mapbox.satellite')
      .setView([38.705, -120.333], 9);
    gon.points.forEach ( function (point) {
      L.marker([point.latitude, point.longitude], {
        icon: L.mapbox.marker.icon({
          'marker-size': 'large',
          'marker-color': '#cc33ff',
          'marker-symbol': 'marker-stroked'
        }),
      }).bindPopup('<p>'+ point.point_num + '</p>' + '<p>' + "Elevation:" + point.elevation + '</p>'+ '<p>' + point.description + '</p>' +'<img src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Nao_robot.jpg" height="300" width="260" />',
      {autoPanPadding: new L.Point(0, 50)}).addTo(map);
    });
  //  })
});
