//query selector variables go here 👇
let searchInput = document.getElementById('search-input'); //USED FOR AUTOCOMPLETE & SEARCH BAR RESULTS
let searchIcon = document.getElementById('search-icon');
let trashIcon = document.getElementById('trash-icon');

//global variables go here 👇

//event listeners go here 👇
window.addEventListener('resize', adjustZoomOnResize);
searchInput.addEventListener('keypress', renderSearchInputMap);
searchIcon.addEventListener('click', renderSearchInputMap);
trashIcon.addEventListener('click', () => {
  //if search click on trash icon, hide trash icon, show search icon
  searchInput.value = "";
  searchIcon.classList.remove('hide');
  trashIcon.classList.remove('show');
  trashIcon.classList.add('hide');

})
searchInput.addEventListener('input', () => searchAutoComplete());
// searchInput.addEventListener("input", () => console.log(searchInput.value));

//functions and event handlers go here 👇
// RENDER MAP ZOOM AS WINDOW IS RE-SIZED
function adjustZoomOnResize() {
  console.log(window.innerWidth);
  window.innerWidth > 500 ? initMap(4) : initMap(3);
}

// RENDER MAP USING SEARCH INPUT
async function renderSearchInputMap(event) {
  let selectedCampLat;
  let selectedCampLng;

  // console.log(searchInput.value, searchInput.value.trim());
  // console.log(event, event.target, event.target.id, event.target.id === "search-icon")
  
  // If the user presses the "Enter" key on the keyboard
  if (event.key === 'Enter' || event.target.id === "search-icon") {
    event.preventDefault();

    //if search input is valid hide search icon / show trash icon
    if (searchInput.value.length > 0) {
      searchIcon.classList.add('hide');
      trashIcon.classList.add('show');
      trashIcon.classList.remove('hide');
    };
    
    // get all campsites from database
    let rawCampsites = await getList();

    // get state for current search input = campsite name
    let getState = rawCampsites.filter(
      (camp) => camp.nameState === searchInput.value
    );

    // get state for current search input = campsite state
    if (!getState.length) {
      getState = rawCampsites.filter(
        (camp) => camp.state === searchInput.value
        );
    };
    
    // if input is not a campsite name or state, use zipcode to get state
    if (!getState.length) {
      getState = rawCampsites.filter(
        (camp) => camp.zipCode === searchInput.value
        );
    };
    
    // validate input
    if (!getState.length) {
      validationModal("Darn!! Campsite Not Found", "Please select a campsite/zipcode from the list then press enter.");
      return;
    }
    
    // get state for first location in the array
    let state = getState[0].state;
    // console.log(getState);

    // get lat & lng for campsite to center map
    if (getState.length) {
      selectedCampLat = getState[0].lat;
      selectedCampLng = getState[0].lng;
    }

    // render map by passing state, map zoom level, selected camp lat & lng
    initMap(6, state, selectedCampLat, selectedCampLng);
  } 
}

// RENDER SEARCH BOX AUTO COMPLETE WITH JQUERY
async function searchAutoComplete() {
  let rawCampsites = await getList(); // get list of all campsites

  // create campsite & zipcode array
  let campsites = rawCampsites.map((rawCampsites) => rawCampsites.nameState);

  let rawStates = rawCampsites
    .map((rawCampsites) => rawCampsites.state)
    .filter((state) => state !== null)
    .sort();

  console.log(rawStates);
  let campZipCodes = rawCampsites
    .map((rawCampsites) => rawCampsites.zipCode)
    .filter((zipCode) => zipCode !== null)
    .sort();

  let combineCampsitesZipCodes = campZipCodes.concat(campsites); // combine campsite and zip code array
  let combineCampsZipsStates = combineCampsitesZipCodes.concat(rawStates); // combine campsites, zipcodes, states
  let autoCompleteList = [...new Set(combineCampsZipsStates)]; // remove duplicates

  // jquery autocomplete function
  $('#search-input').autocomplete({
    minLength: 2,
    source: autoCompleteList,
  });
}

// INTIALIZE MAP
async function initMap(zoomLevel, state, selectedCampLat, selectedCampLng) {
  //if search input is valid hide search icon / show trash icon

  // searchInput.value = "hello"; 
  
  if (searchInput.value.length > 0) {
    searchIcon.classList.add('hide');
    trashIcon.classList.add('show');
    trashIcon.classList.remove('hide');
  };

  searchInput.focus(); //only focus on desktop not mobile

  let list = await getList(state);
  // renderSearchResults(list);
  let mobileZoomLevel = setMobileZoomLevel(zoomLevel);
  let { centerLat, centerLng } = setLatAndLong(
    list,
    selectedCampLat,
    selectedCampLng,
    zoomLevel
  );
  createMap(
    centerLat,
    centerLng,
    mobileZoomLevel,
    zoomLevel,
    list,
    selectedCampLat
  );
}

// GET LIST OF CAMPSITES TO RENDER
const getList = async (state) => {
  let result;

  if (!state) {
    result = await fetch(`/api/map/campsites-all`, {
      method: 'GET',
    });
    const json = await result.json();
    let list = json.filter(
      (element) => element.lat !== null || element.lng !== null
    );
    list = sortUtility(list);
    return list;

  } else {
    result = await fetch(`/api/map/campsite-list/${state}`, {
      method: 'GET',
    });
    const json = await result.json();
    let list = json.filter(
      (element) => element.lat !== null || element.lng !== null
    );
    list = sortUtility(list);
    return list;
  }
};

function renderHoverIcon(event, list, markers, selectedCampLat) {
  // let hoverCampsiteIcon = 'http://maps.google.com/mapfiles/kml/shapes/parks.png';
  // let hoverCampsiteIcon = 'http://maps.google.com/mapfiles/kml/shapes/homegardenbusiness.png';
  // let hoverCampsiteIcon = 'http://maps.google.com/mapfiles/kml/paddle/ylw-blank.png';
  let hoverCampsiteIcon = 'http://maps.google.com/mapfiles/kml/shapes/campfire.png';

  // console.log(event.target);
  // console.log(event.target.dataset);
  // console.log(event.target.dataset.index);
  // console.log(event.target.dataset.latitude);
  // console.log(selectedCampLat, parseFloat(event.target.dataset.latitude), selectedCampLat === parseFloat(event.target.dataset.latitude) );

  for (let i = 0; i < markers.length; i++) {
    // if (parseInt(event.target.dataset.index) === i) {
    if (parseInt(event.target.dataset.index) === i && parseFloat(event.target.dataset.latitude) !== selectedCampLat) {
        // console.log(parseInt(event.target.dataset.index) === i );
        markers[i].setIcon(hoverCampsiteIcon);
        return;
    }
  }
};

function renderDefaultIcon(event, list, markers, selectedCampLat) {
  let campsiteIcon = 'http://maps.google.com/mapfiles/ms/icons/red-dot.png';

  for (let i = 0; i < markers.length; i++) {
    // if (parseInt(event.target.dataset.index) === i) {
    if (parseInt(event.target.dataset.index) === i && parseFloat(event.target.dataset.latitude) !== selectedCampLat) {
        // console.log(parseInt(event.target.dataset.index) === i );
        markers[i].setIcon(campsiteIcon);
        return;
    }
  }
};

// RENDER SEARCH RESULTS IN ASIDE
function renderSearchResults(list, markers, selectedCampLat) {
  // console.log('list ======= ', list);
  let asideContainer = document.getElementById('searchResults');
  asideContainer.textContent = '';

  for (let i = 0; i < list.length; i++) {
    //CREATE ELEMENT
    let campPath = document.createElement('a');
    let campName = document.createElement('p');
    let renderLine = document.createElement('hr');

    campPath.addEventListener('mouseover', (event) => {
      renderHoverIcon(event, list, markers, selectedCampLat)
    });

    // campPath.addEventListener('mouseout', (event) => {
    //   renderDefaultIcon(event, list, markers, selectedCampLat)
    // });

    //SET ATTRIBUTES
    // campPath.setAttribute('href', `/api/map/campsite/:${list[i].camp_id}`);
    campPath.setAttribute('href', `/api/campsites/${list[i].camp_id}`);
    // campPath.classList.add('aside-ahref');
    campName.setAttribute('data-index', i);
    campName.setAttribute('data-latitude', list[i].lat);
    campName.classList.add('aside-ahref');

    //CREATE TITLE CONTENT
    campName.textContent = `${i + 1}) ${list[i].nameState}`;

    //APPEND
    asideContainer.append(campPath);
    campPath.append(campName);
    campName.append(renderLine);
  }
}

// SET MOBILE ZOOM LEVEL
function setMobileZoomLevel(zoomLevel) {
  if (window.innerWidth <= 500 && !zoomLevel) {
    zoomLevel = 3;
  }
  return zoomLevel;
}

function setLatAndLong(list, selectedCampLat, selectedCampLng, zoomLevel) {
  let centerLat;
  let centerLng;

  selectedCampLat ? (centerLat = selectedCampLat) : (centerLat = list[0].lat);
  selectedCampLng ? (centerLng = selectedCampLng) : (centerLng = list[0].lng);

  console.log(zoomLevel, list[0].lat, list[0].lng);
  console.log(selectedCampLat, selectedCampLng, centerLat, centerLng);

  return { centerLat, centerLng };
}

function createMap(
  centerLat,
  centerLng,
  mobileZoomLevel,
  zoomLevel,
  list,
  selectedCampLat
) {
  // ((marker.position.lat() < 50 && marker.position.lat() > 30) && (marker.position.lng() > -118 && marker.position.lng() < -75))

  // Create instance of map
  const map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: centerLat, lng: centerLng },
    zoom: mobileZoomLevel || zoomLevel || 4,
    mapTypeId: 'terrain',
    // disableDefaultUI: true,
    zoomControl: true,
    mapTypeControl: true,
    scaleControl: true,
    streetViewControl: true,
    rotateControl: true,
    fullscreenControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
    },
    minZoom: 2, //zoom out limited to prevent multiple maps
    maxZoom: 25,
    // enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  });

  // Create an info window to share between markers
  const infoWindow = new google.maps.InfoWindow();

  // creates marker boundry to center map based on screen size (step #1 of 3)
  let bounds  = new google.maps.LatLngBounds();

  // Create the markers
  const markers = list.map(({ lat, lng, name, id, camp_id }, i) => {
  // markers = list.map(({ lat, lng, name, id, camp_id }, i) => { //section
    if (lat && lng) {
      // const contentString = `<h6 id="" class="" style="color: blue; text-decoration: underline"><a href="/api/map/campsite/${camp_id}">${name}</a></h6>`;

      const contentString = `<h6 id="" class="map-ahref" style="color: blue; text-decoration: underline"><a class="map-ahref" href="/api/campsites/${camp_id}">${name}</a></h6>`

      // https://maps.gstatic.com/mapfiles/place_api/icons/v2/camping_pinlet.svg
      let selectedCampsiteIcon =
        'http://maps.google.com/mapfiles/kml/shapes/campground.png';
      let campsiteIcon = 'http://maps.google.com/mapfiles/ms/icons/red-dot.png';

      const marker = new google.maps.Marker({
        position: { lat, lng },
        map,
        optimized: true,
        icon: lat === selectedCampLat ? selectedCampsiteIcon : campsiteIcon,
        size: new google.maps.Size(50, 100),
      });

      // marker.classList.add('hello')
      marker.className = "marker";

      // Add a click listener for each marker, and set up the info window
      marker.addListener('click', () => {
        infoWindow.close();
        infoWindow.setContent(contentString);
        infoWindow.open(marker.getMap(), marker);
        if (lat !== selectedCampLat) {
          marker.setIcon(
            // 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
            'http://maps.google.com/mapfiles/kml/shapes/campfire.png'
          );
        }
        marker.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(() => {
          marker.setAnimation(null);
        }, 1000);
      });

      const { south, north, west, east } = { // boundries to center map
        south: 30,  //app Austin
        north: 50,  //app Northern border
        west: -118, //app LA
        east: -75,  //app NY
      };

      // creates marker boundry to center map based on screen size (step #2 of 3)
      if ((marker.position.lat() >= south && marker.position.lat() <= north) && (marker.position.lng() >= west && marker.position.lng() <= east)) {
          loc = new google.maps.LatLng(marker.position.lat(), marker.position.lng());
          bounds.extend(loc);
        }

      // console.log(marker)
      return marker;
    }
  });

  // creates marker boundry to center map based on screen size (step #3 of 3)
  if (!selectedCampLat) {
    map.fitBounds(bounds);       // auto-zoom
    map.panToBounds(bounds);     //auto-center
  }

  // setOutOfBoundsListener(map);
  // renderSelectedCampMarker(selectedCampLat, infoWindow, map);
  renderSearchResults(list, markers, selectedCampLat);
  renderMarkerClusters(markers, map);
  renderCurrentLocationIcon(map, infoWindow);
  // renderCenterMapIcon(map, infoWindow);
  // renderCenterMapIcon(map, infoWindow);
}

// CREATES A MARKER FOR SELECTED CAMPSITE
function renderSelectedCampMarker(selectedCampLat, infoWindow, map) {
  if (selectedCampLat && map) {
    const markerSelectedCampsite = new google.maps.Marker({});
    infoWindow.open(markerSelectedCampsite.getMap(), markerSelectedCampsite);
  }
}

// ADD MARKER CLUSTERS TO REDUCE VISUAL CLUTTER
function renderMarkerClusters(markers, map) {
  if (window.innerWidth <= 500) {
    new markerClusterer.MarkerClusterer({ markers, map });
    // new MarkerClusterer({ markers, map });
    // markerCluster.clearMarkers();
    // markerCluster.removeMarker(markers[i]);
  }
}

// RENDER CURRENT LOCATION ICON ON CLICK
function renderCurrentLocationIcon(map, infoWindow) {
  const location = document.createElement('div');
  const locationIcon = document.createElement('img');
  locationIcon.src = '/images/current-location-v4.png';
  location.setAttribute('style', 'width:40px; padding: 0px');
  locationIcon.setAttribute(
    'style',
    'padding: 2px; height:37px; width:40px; top:50px; padding-top: 6px;'
  );

  location.append(locationIcon);

  location.classList.add('custom-map-control-button');
  map.controls[google.maps.ControlPosition.RIGHT_TOP].push(location);

  locationIcon.addEventListener('click', () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          infoWindow.setPosition(pos);
          infoWindow.setContent('Location found.');
          infoWindow.open(map);
          map.setCenter(pos);
          map.setZoom(5);

          const markerCurrentLocation = new google.maps.Marker({
            position: pos,
            map,
            // icon: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png',
            icon: 'http://maps.google.com/mapfiles/kml/shapes/ranger_station.png',
          });
          infoWindow.open(
            markerCurrentLocation.getMap(),
            markerCurrentLocation
          );
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
}

// RENDER CURRENT LOCATION ICON ON CLICK //todo
function renderCenterMapIcon(map, infoWindow) {
  const center = document.createElement('div');
  const centerIcon = document.createElement('img');
  centerIcon.src = '/images/current-location-v4.png'; //todo
  center.setAttribute('style', 'width:40px; padding: 0px');
  centerIcon.setAttribute(
    'style',
    'padding: 2px; height:37px; width:40px; top:50px; padding-top: 6px;'
  );

  center.append(centerIcon);

  center.classList.add('custom-map-control-button');
  map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(center);

  centerIcon.addEventListener('click', () => {
    initMap();
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(
    //     (position) => {
    //       const pos = {
    //         lat: position.coords.latitude,
    //         lng: position.coords.longitude,
    //       };

    //       infoWindow.setPosition(pos);
    //       // infoWindow.setContent('Location found.');
    //       infoWindow.open(map);
    //       map.setCenter(pos);
    //       map.setZoom(5);

    //       const markerCurrentLocation = new google.maps.Marker({
    //         position: pos,
    //         map,
    //         // icon: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png',
    //         icon: 'http://maps.google.com/mapfiles/kml/shapes/ranger_station.png',
    //       });
    //       infoWindow.open(
    //         markerCurrentLocation.getMap(),
    //         markerCurrentLocation
    //       );
    //     },
    //     () => {
    //       handleLocationError(true, infoWindow, map.getCenter());
    //     }
    //   );
    // } else {
    //   // Browser doesn't support Geolocation
    //   handleLocationError(false, infoWindow, map.getCenter());
    // }
  });
}

// RENDER CURRENT LOCATION ICON ON CLICK //todo
function renderRefreshMapIcon(map, infoWindow) {
  const refresh = document.createElement('div');
  const refreshIcon = document.createElement('img');
  refreshIcon.src = '/images/current-location-v4.png'; //todo
  refresh.setAttribute('style', 'width:40px; padding: 0px');
  refreshIcon.setAttribute(
    'style',
    'padding: 2px; height:37px; width:40px; top:50px; padding-top: 6px;'
  );

  refresh.append(refreshIcon);

  refresh.classList.add('custom-map-control-button');
  map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(refresh);

  refreshIcon.addEventListener('click', () => {
    initMap();
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         const pos = {
  //           lat: position.coords.latitude,
  //           lng: position.coords.longitude,
  //         };

  //         infoWindow.setPosition(pos);
  //         // infoWindow.setContent('Location found.');
  //         infoWindow.open(map);
  //         map.setCenter(pos);
  //         map.setZoom(5);

  //         const markerCurrentLocation = new google.maps.Marker({
  //           position: pos,
  //           map,
  //           // icon: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png',
  //           icon: 'http://maps.google.com/mapfiles/kml/shapes/ranger_station.png',
  //         });
  //         infoWindow.open(
  //           markerCurrentLocation.getMap(),
  //           markerCurrentLocation
  //         );
  //       },
  //       () => {
  //         handleLocationError(true, infoWindow, map.getCenter());
  //       }
  //     );
  //   } else {
  //     // Browser doesn't support Geolocation
  //     handleLocationError(false, infoWindow, map.getCenter());
  //   }
  });
}

// HANDLE ERROR FOR CURRENT LOCATION CLICK IF GEO LOCATION DISABLED
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? 'Error: The Geolocation service failed.'
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}

function validationModal(title, body) {
  $("#no-input-model").modal("show");
  $("#no-input-title").text(title);
  $("#no-input-body").text(body);
}

//UTILITY FUNCTIONS
function sortUtility(listToSort) {
  let sortedList = listToSort.sort(function (a, b) {
    const nameA = a.name.toUpperCase(); //ignore upper and lowercase
    const nameB = b.name.toUpperCase(); //ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    //names must be equal
    return 0;
  });
  return sortedList;
}

// Prevents multiple maps when zoom out to the max
// var lastValidCenter;
// var minZoomLevel = 2;

// function setOutOfBoundsListener() {
//         google.maps.event.addListener(map, 'dragend', function () {
//             checkLatitude(map);
//         });
//         google.maps.event.addListener(map, 'idle', function () {
//             checkLatitude(map);
//         });
//         google.maps.event.addListener(map, 'zoom_changed', function () {
//             checkLatitude(map);
//         });
// };

// function checkLatitude(map) {
//     if (this.minZoomLevel) {
//         if (map.getZoom() < minZoomLevel) {
//             map.setZoom(parseInt(minZoomLevel));
//         }
//     }

//     var bounds = map.getBounds();
//     var sLat = map.getBounds().getSouthWest().lat();
//     var nLat = map.getBounds().getNorthEast().lat();
//     if (sLat < -85 || nLat > 85) {
//         //the map has gone beyone the world's max or min latitude - gray areas are visible
//         //return to a valid position
//         if (this.lastValidCenter) {
//             map.setCenter(this.lastValidCenter);
//         }
//     }
//     else {
//         this.lastValidCenter = map.getCenter();
//     }
// }

initMap();

// Source:
// SIMPLE MARKER: https://developers.google.com/maps/documentation/javascript/examples/marker-simple
// https://developers.google.com/maps/documentation/javascript/examples/marker-accessibility
// INFO WINDOWS: https://developers.google.com/maps/documentation/javascript/examples/infowindow-simple

//TODO
// ADD GEO LOCATION
// ADD LINK TO ROUTE FOR EACH SITE
// WHAT ELSE?
// MAP ICON

// const svgMarker = {
//   path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
//   fillColor: "blue",
//   fillOpacity: 0.6,
//   strokeWeight: 0,
//   rotation: 0,
//   scale: 1,
//   anchor: new google.maps.Point(15, 30),
// };
