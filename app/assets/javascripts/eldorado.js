$(document).ready(function(){
  L.mapbox.accessToken = 'pk.eyJ1Ijoia2FybGFraW5nMiIsImEiOiJjaWt0M2hobmgwMDI0dXltM3d3dGprcDU5In0.N37dBdhmjA55gcjcwk1WdQ';
  var map = L.mapbox.map('map', 'mapbox.satellite')
      .setView([38.805, -120.333], 10);
    gon.points.forEach ( function (point) {
      L.marker([point.latitude, point.longitude], {
        icon: L.mapbox.marker.icon({
          'marker-size': 'large',
          'marker-color': '#e50000',
          'marker-symbol': 'marker-stroked'
        }),
      }).bindPopup('<p>'+ '<span style="font-size: 2em;">' + point.point_num + '</span>'+ '</p>' + '<p>' +'<span style="font-size: .8em;">' + "Elevation: " + point.elevation + '</p>' + '</span>'+'<img src='+point.img_url+'/>' + '<p>' + point.description + '</p>',
      {autoPanPadding: new L.Point(0, 50)}).addTo(map);

    });
  //  })
    var layers = {
      Landsat2014: L.mapbox.tileLayer('karlaking2.9fwnbjys', {format: 'png128'}),
      Landsat2015: L.mapbox.tileLayer('karlaking2.du1h8s5z', {format: 'png128'})

  };

  layers.Landsat2015.addTo(map);
  L.control.layers(layers).addTo(map);

});


