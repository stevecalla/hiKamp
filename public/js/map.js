//query selector variables go here 👇
let searchInput = document.getElementById('search-input'); //USED FOR AUTOCOMPLETE & SEARCH BAR RESULTS
let searchIcon = document.getElementById('search-icon');
let trashIcon = document.getElementById('trash-icon');

//global variables go here 👇

//event listeners go here 👇
window.addEventListener('resize', adjustZoomOnResize);
searchInput.addEventListener('keypress', renderSearchInputMap);
searchIcon.addEventListener('click', renderSearchInputMap);
trashIcon.addEventListener('click', clearSearchInputValue);
searchInput.addEventListener('input', () => searchAutoComplete());

//functions and event handlers go here 👇
// RENDER MAP ZOOM AS WINDOW IS RE-SIZED
function adjustZoomOnResize() {
  if (window.innerWidth > 500 && window.innerWidth % 100 === 0) {
    initMap(4)
  } else if (window.innerWidth < 500 & window.innerWidth % 50 === 0) {
    initMap(3)
  }
}

// RENDER MAP USING SEARCH INPUT
async function renderSearchInputMap(event) {
  let selectedCampLat;
  let selectedCampLng;

  // If the user presses the "Enter" key on the keyboard
  if (event.key === 'Enter' || event.target.id === 'search-icon') {
    event.preventDefault();

    //if search input is valid hide search icon / show trash icon
    if (searchInput.value.length > 0) {
      searchIcon.classList.add('hide');
      trashIcon.classList.add('show');
      trashIcon.classList.remove('hide');
    }

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
    }

    // if input is not a campsite name or state, use zipcode to get state
    if (!getState.length) {
      getState = rawCampsites.filter(
        (camp) => camp.zipCode === searchInput.value
      );
    }

    // validate input
    if (!getState.length) {
      validationModal(
        'Darn!! Campsite Not Found',
        'Please select a campsite/zipcode from the list then press enter.'
      );
      return;
    }

    // get state for first location in the array
    let state = getState[0].state;

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

// SECTION INTIALIZE MAP
async function initMap(zoomLevel, state, selectedCampLat, selectedCampLng) {
  //if search input is valid hide search icon / show trash icon

  renderSpinnerDuringAPICall();

  if (searchInput.value.length > 0) {
    searchIcon.classList.add('hide');
    trashIcon.classList.add('show');
    trashIcon.classList.remove('hide');
  }

  searchInput.focus(); //by default only focuses on desktop not mobile

  let list = await getList(state);
  let mobileZoomLevel = setMobileZoomLevel(zoomLevel);
  let { centerLat, centerLng } = setLatAndLong(
    list,
    selectedCampLat,
    selectedCampLng,
    zoomLevel
  );

  let resetMap = document.getElementById('map');
  resetMap.textContent = '';

  let renderMapAPICall = setTimeout(() => {
    createMap(
      centerLat,
      centerLng,
      mobileZoomLevel,
      zoomLevel,
      list,
      selectedCampLat
    );
    removeSpinnerAfterAPICall(renderMapAPICall);
  }, 1000);
}

// SECTION GET LIST OF CAMPSITES TO RENDER
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

// RENDER ICON AS USER HOVERS OVER SEARCH RESULTS LIST IN ASIDE
function renderHoverIcon(event, list, markers, selectedCampLat) {
  let hoverCampsiteIcon =
    'https://maps.google.com/mapfiles/kml/shapes/campfire.png';

  for (let i = 0; i < markers.length; i++) {
    if (
      parseInt(event.target.dataset.index) === i &&
      parseFloat(event.target.dataset.latitude) !== selectedCampLat
    ) {
      markers[i].setIcon(hoverCampsiteIcon);
      return;
    }
  }
}

// RENDER DEFAULT RED MARKER ICON
function renderDefaultIcon(event, list, markers, selectedCampLat) {
  let campsiteIcon = 'https://maps.google.com/mapfiles/ms/icons/red-dot.png';

  for (let i = 0; i < markers.length; i++) {
    if (
      parseInt(event.target.dataset.index) === i &&
      parseFloat(event.target.dataset.latitude) !== selectedCampLat
    ) {
      markers[i].setIcon(campsiteIcon);
      return;
    }
  }
}

// RENDER SEARCH RESULTS IN ASIDE
function renderSearchResults(list, markers, selectedCampLat) {
  let asideContainer = document.getElementById('searchResults');
  asideContainer.textContent = '';

  for (let i = 0; i < list.length; i++) {
    //CREATE ELEMENT
    let campPath = document.createElement('a');
    let campName = document.createElement('p');
    let renderLine = document.createElement('hr');

    campPath.addEventListener('mouseover', (event) => {
      renderHoverIcon(event, list, markers, selectedCampLat);
    });

    // CODE WILL REMOVE THE HOVER ICON IF THAT IS A PREFERRED USER EXPERIENCE
    // campPath.addEventListener('mouseout', (event) => {
    //   renderDefaultIcon(event, list, markers, selectedCampLat)
    // });

    //SET ATTRIBUTES
    campPath.setAttribute('href', `/api/campsites/${list[i].camp_id}`);
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

// SET LATTITUDE AND LONGITUDE BASED ON USER INPUT
function setLatAndLong(list, selectedCampLat, selectedCampLng, zoomLevel) {
  let centerLat;
  let centerLng;

  selectedCampLat ? (centerLat = selectedCampLat) : (centerLat = list[0].lat);
  selectedCampLng ? (centerLng = selectedCampLng) : (centerLng = list[0].lng);

  return { centerLat, centerLng };
}

// SECTION CREATE MAP
function createMap(
  centerLat,
  centerLng,
  mobileZoomLevel,
  zoomLevel,
  list,
  selectedCampLat
) {

  // Create instance of map
  const map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: centerLat, lng: centerLng },
    zoom: mobileZoomLevel || zoomLevel || 4,
    mapTypeId: 'terrain',
    zoomControl: true,
    mapTypeControl: true,
    scaleControl: true,
    streetViewControl: true,
    rotateControl: true,
    fullscreenControl: false, // FULL SCREEN NOT WORKING IN DESKTOP VIEW THIS DISABLED
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
    },
    minZoom: 2, //zoom out limited to prevent multiple maps
    maxZoom: 25,
    timeout: 5000,
    maximumAge: 0,
  });

  // Create an info window to share between markers
  const infoWindow = new google.maps.InfoWindow();

  // creates marker boundry to center map based on screen size (step #1 of 3)
  let bounds = new google.maps.LatLngBounds();

  // Create the markers
  const markers = list.map(({ lat, lng, name, id, camp_id }, i) => {
    if (lat && lng) {
      const contentString = `<h6 id="" class="map-ahref" style="color: blue; text-decoration: underline"><a class="map-ahref" href="/api/campsites/${camp_id}">${name}</a></h6>`;

      let selectedCampsiteIcon =
        'https://maps.google.com/mapfiles/kml/shapes/campground.png';
      let campsiteIcon =
        'https://maps.google.com/mapfiles/ms/icons/red-dot.png';

      const marker = new google.maps.Marker({
        position: { lat, lng },
        map,
        optimized: true,
        icon: lat === selectedCampLat ? selectedCampsiteIcon : campsiteIcon,
        size: new google.maps.Size(50, 100),
        title: name,
      });

      marker.className = 'marker';

      // Add a click listener for each marker, and set up the info window
      marker.addListener('click', () => {
        infoWindow.close();
        infoWindow.setContent(contentString);
        infoWindow.open(marker.getMap(), marker);
        if (lat !== selectedCampLat) {
          marker.setIcon(
            'https://maps.google.com/mapfiles/kml/shapes/campfire.png'
          );
        }
        marker.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(() => {
          marker.setAnimation(null);
        }, 1000);
      });

      const { south, north, west, east } = {
        // boundries to center map
        south: 30, //app Austin
        north: 50, //app Northern border
        west: -118, //app LA
        east: -75, //app NY
      };

      // creates marker boundry to center map based on screen size (step #2 of 3)
      if (
        marker.position.lat() >= south &&
        marker.position.lat() <= north &&
        marker.position.lng() >= west &&
        marker.position.lng() <= east
      ) {
        loc = new google.maps.LatLng(
          marker.position.lat(),
          marker.position.lng()
        );
        bounds.extend(loc);
      }

      return marker;
    }
  });

  // creates marker boundry to center map based on screen size (step #3 of 3)
  if (!selectedCampLat) {
    map.fitBounds(bounds); // auto-zoom
    map.panToBounds(bounds); //auto-center
  }

  // setOutOfBoundsListener(map);
  // renderSelectedCampMarker(selectedCampLat, infoWindow, map);
  renderSearchResults(list, markers, selectedCampLat);
  renderMarkerClusters(markers, map);
  renderCurrentLocationIcon(map, infoWindow);
  renderRefreshMapIcon(map, infoWindow);
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
  }
}

// RENDER CURRENT LOCATION ICON ON CLICK
function renderCurrentLocationIcon(map, infoWindow) {
  // CREATE ELEMENT
  const location = document.createElement('div');
  const locationIcon = document.createElement('img');

  // ADD ELEMENT ATTRIBUTES
  locationIcon.src = '/images/current-location-v4.png';
  location.setAttribute('style', 'width:40px; padding: 0px');
  locationIcon.setAttribute(
    'style',
    'padding: 2px; height:37px; width:40px; top:50px; padding-top: 6px;'
  );
  location.title = 'Current location';
  location.classList.add('custom-map-control-button');

  // APPEND ELEMENT TO THE MAP
  location.append(locationIcon);
  map.controls[google.maps.ControlPosition.RIGHT_TOP].push(location);

  // CREATE EVENT LISTENER
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
            icon: 'https://maps.google.com/mapfiles/kml/shapes/ranger_station.png',
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

// RENDER REFRESH MAP ON CLICK
function renderRefreshMapIcon(map, infoWindow) {
  // CREATE ELEMENT
  const refresh = document.createElement('div');
  const refreshIcon = document.createElement('img');

  // ADD ELEMENT ATTRIBUTES
  refreshIcon.src = '/images/current-location-v7.png';
  refresh.setAttribute('style', 'width:40px; padding: 0px');
  refreshIcon.setAttribute(
    'style',
    'height:37px; width:40px; top:50px; padding: 4px 1px 0px 2px;'
  );
  refresh.title = 'Refresh map';

  // APPEND ELEMENT TO THE MAP
  refresh.append(refreshIcon);
  refresh.classList.add('custom-map-control-button');

  // PLACE ELEMENT ON MAP
  map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(refresh);

  // CREATE EVENT LISTENER
  refreshIcon.addEventListener('click', () => {
    initMap();
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

// UTILITY FUNCTION TO CLEAR SEARCH INPUT & HIDE/SHOW TRASH ICON
function clearSearchInputValue() {
  //if user clicks on trash icon = hide trash icon, show search icon
  searchInput.value = '';
  searchIcon.classList.remove('hide');
  trashIcon.classList.remove('show');
  trashIcon.classList.add('hide');
}

// UTILITY SORT FUNCTION
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

// UTILITY RENDER SPINNER FUNCTION
function renderSpinnerDuringAPICall() {
  document.getElementById('spinner').classList.remove('hide');
  document.getElementById('spinner').classList.add('show');
}

// UTILITY REMOVE SPINNER FUNCTION
function removeSpinnerAfterAPICall(passTimeOutId) {
  document.getElementById('spinner').classList.add('hide');
  document.getElementById('spinner').classList.remove('show');
  clearTimeout(passTimeOutId);
}

initMap();
