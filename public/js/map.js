// SECTION MAP BOX
// L.mapbox.accessToken = 'pk.eyJ1Ijoic3RldmVjYWxsYSIsImEiOiJjbDhqNjc2NDMwYWZzM29wYzBzaTYwbWhtIn0.6xQzOco7c8oQNlUXWvpMjA';
// var map = L.mapbox.map('map')
//     .setView([40.0497, -105.2143], 9)
//     .addLayer(L.mapbox.styleLayer('mapbox://styles/mapbox/outdoors-v11'));

    // .addLayer(L.mapbox.styleLayer('mapbox://styles/mapbox/streets-v11'));
    // .addLayer(L.mapbox.styleLayer('mapbox://styles/mapbox/satellite-v9'));

// // Create a marker and add it to the map.
// var marker = L.marker([40.0497, -105.2143], {
//   icon: L.mapbox.marker.icon({
//     'marker-color': '#f86767'
//   })
// }).addTo(map);

// SECTION GOOGLE MAP
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.0497, lng: -105.2143},
    zoom: 8
  });

  var input = document.getElementById('searchInput');
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  var autocomplete = new google.maps.places.Autocomplete(input);
  autocomplete.bindTo('bounds', map);

  var infowindow = new google.maps.InfoWindow();
  var marker = new google.maps.Marker({
      map: map,
      anchorPoint: new google.maps.Point(0, -29)
  });

  autocomplete.addListener('place_changed', function() {
      infowindow.close();
      marker.setVisible(false);
      var place = autocomplete.getPlace();
      if (!place.geometry) {
          window.alert("Autocomplete's returned place contains no geometry");
          return;
      }

      // If the place has a geometry, then present it on a map.
      if (place.geometry.viewport) {
          map.fitBounds(place.geometry.viewport);
      } else {
          map.setCenter(place.geometry.location);
          map.setZoom(17);
      }
      marker.setIcon(({
          url: place.icon,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(35, 35)
      }));
      marker.setPosition(place.geometry.location);
      marker.setVisible(true);
  
      var address = '';
      if (place.address_components) {
          address = [
            (place.address_components[0] && place.address_components[0].short_name || ''),
            (place.address_components[1] && place.address_components[1].short_name || ''),
            (place.address_components[2] && place.address_components[2].short_name || '')
          ].join(' ');
      }
  
      infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
      infowindow.open(map, marker);
    
      // Location details
      for (var i = 0; i < place.address_components.length; i++) {
          if(place.address_components[i].types[0] == 'postal_code'){
              document.getElementById('postal_code').innerHTML = place.address_components[i].long_name;
          }
          if(place.address_components[i].types[0] == 'country'){
              document.getElementById('country').innerHTML = place.address_components[i].long_name;
          }
      }
      document.getElementById('location').innerHTML = place.formatted_address;
      document.getElementById('lat').innerHTML = place.geometry.location.lat();
      document.getElementById('lon').innerHTML = place.geometry.location.lng();
  });
}

