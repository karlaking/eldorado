$(document).ready(function(){
  L.mapbox.accessToken = 'pk.eyJ1Ijoia2FybGFraW5nMiIsImEiOiJjaWV1d29pZ2QwczhwczltMm1lbWMxZnJmIn0._CLLgaefzXvhtCeSs61tzQ';
  var map = L.mapbox.map('map', 'mapbox.satellite')
      .setView([38.805, -120.333], 10);
    gon.points.forEach ( function (point) {
      L.marker([point.latitude, point.longitude], {
        icon: L.mapbox.marker.icon({
          'marker-size': 'large',
          'marker-color': '#cc33ff',
          'marker-symbol': 'marker-stroked'
        }),
      }).bindPopup('<p>'+ '<span style="font-size: 2em;">' + point.point_num + '</span>'+ '</p>' + '<p>' +'<span style="font-size: .8em;">' + "Elevation:" + point.elevation + '</p>' + '</span>'+'<img src='+point.img_url+'/>' + '<p>' + "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." + '</p>',
      {autoPanPadding: new L.Point(0, 50)}).addTo(map);
    });
  //  })
});

