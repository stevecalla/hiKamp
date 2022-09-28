//todo add spinner for map?
//todo size icons?
//todo set zoom to show icons?
//todo set zoom to center on selected camp?
//query selector variables go here 👇
let searchInput = document.getElementById("search-input"); //USED FOR AUTOCOMPLETE & SEARCH BAR RESULTS

//global variables go here 👇
// let state;
// let myLatLng = [
//   {
//     name: 'Aspenglen Campground',
//     lat: 40.39934770583215,
//     lng: -105.59305451637942,
//   },
//   {
//     name: 'Backpacking Campsites in the Dunes or Forest',
//     lat: 37.77724,
//     lng: -105.535601,
//   },
//   {
//     name: 'Cimarron Campground',
//     lat: 38.4442894775407,
//     lng: -107.555231428248,
//   },
//   {
//     name: 'Deerlodge Park Campground',
//     lat: 40.4464807631,
//     lng: -108.513304134,
//   },
//   {
//     name: 'Dry Gulch Campground',
//     lat: 38.4841144836276,
//     lng: -107.188437346818,
//   },
//   {
//     name: 'East Elk Creek Group Campground',
//     lat: 38.484167,
//     lng: -107.188333,
//   },
//   {
//     name: 'East Portal Campground',
//     lat: 38.527059599536,
//     lng: -107.64948401793,
//   },
//   {
//     name: 'East Portal Campground',
//     lat: 38.526896,
//     lng: -107.649306,
//   },
//   {
//     name: 'Echo Park Campground',
//     lat: 40.5208668444,
//     lng: -108.993230693,
//   },
//   {
//     name: 'Elk Creek Campground',
//     lat: 38.4674202781,
//     lng: -107.172066844,
//   },
//   {
//     name: 'Gates of Lodore Campground',
//     lat: 40.7249234842,
//     lng: -108.887824372,
//   },
//   {
//     name: 'Gateview Campground',
//     lat: 38.3844578817442,
//     lng: -107.242874927003,
//   },
//   {
//     name: 'Glacier Basin Campground',
//     lat: 40.32980715336969,
//     lng: -105.59562927944023,
//   },
//   {
//     name: 'Green River Campground',
//     lat: 40.4209774724,
//     lng: -109.243175668,
//   },
//   {
//     name: 'Hovenweep Campground',
//     lat: 37.3832032699,
//     lng: -109.070815001,
//   },
//   {
//     name: 'Lake Fork Campground',
//     lat: 38.4548253084593,
//     lng: -107.326981170259,
//   },
//   {
//     name: 'lnggs Peak Campground',
//     lat: 40.27479364272779,
//     lng: -105.55770432202075,
//   },
//   {
//     name: 'Medano Pass Primitive Road Campsites',
//     lat: 37.803519,
//     lng: -105.495654,
//   },
//   {
//     name: 'Moraine Park Campground',
//     lat: 40.36066149616986,
//     lng: -105.60006623223796,
//   },
//   {
//     name: 'Morefield Campground',
//     lat: 37.3014992738134,
//     lng: -108.417912473544,
//   },
//   {
//     name: 'North Rim Campground',
//     lat: 38.58518332872675,
//     lng: -107.70942777084946,
//   },
//   {
//     name: 'Piñon Flats Campground',
//     lat: 37.7449368560859,
//     lng: -105.504703076291,
//   },
//   {
//     name: 'Ponderosa Campground',
//     lat: 38.5257080480139,
//     lng: -107.314899399111,
//   },
//   {
//     name: 'Rainbow Park Campground',
//     lat: 40.4956930727,
//     lng: -109.174431587,
//   },
//   {
//     name: 'Red Creek Campground',
//     lat: 38.4793732438395,
//     lng: -107.231989784489,
//   },
//   {
//     name: 'Saddlehorn Campground',
//     lat: 39.10560328979322,
//     lng: -108.73257527355514,
//   },
//   {
//     name: 'South Rim Campground',
//     lat: 38.54381032355281,
//     lng: -107.689424061934,
//   },
//   {
//     name: 'Split Mountain Group Campground',
//     lat: 40.4405279561,
//     lng: -109.252312611,
//   },
//   {
//     name: 'Stevens Creek Campground',
//     lat: 38.4869233764467,
//     lng: -107.09112479954,
//   },
//   {
//     name: 'Timber Creek Campground',
//     lat: 40.379225136469785,
//     lng: -105.85275135737629,
//   },
// ];

//event listeners go here 👇
searchInput.addEventListener("input", () => console.log(searchInput.value));
searchInput.addEventListener("input", () => searchAutoComplete());

//functions and event handlers go here 👇
function logToTerminal() {
  console.log('yes');
  let b = document.getElementById('gmimap3')
  // b.setAttribute('style', "color:green!important");
  // b.setIcon('http://www.google.com/mapfiles/shadow50.png');
  // "markers[ID].setIcon(image_url)">
  b.setIcon("http://maps.google.com/mapfiles/ms/icons/blue-dot.png")
  console.log(b)
}

function renderSearchResults(list) {
  console.log('list ======= ', list);
  let asideContainer = document.getElementById('searchResults');
  asideContainer.textContent = "";

  for (let i = 0; i < list.length; i++) {
    //CREATE ELEMENT
    let campPath = document.createElement('a');
    let campName = document.createElement('p');
    let renderLine = document.createElement('hr');

    // campPath.addEventListener('mouseover', logToTerminal);

    //SET ATTRIBUTES
    campPath.setAttribute('href', `/api/map/campsite/:${list[i].id}`);

    //CREATE TITLE CONTENT
    campName.textContent = `${i + 1}) ${list[i].nameState }`;

    //APPEND
    asideContainer.append(campPath);
    campPath.append(campName);
    campName.append(renderLine);
  }
};

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function getCurrentPosition() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position),
      (error) => reject(error)
    );
  });
}

async function initMap(state, zoomLevel, selectedCampLat, selectedCampLng) {
  // let position = await getCurrentPosition();
  // let currentPosition = position.coords;
  // let currentLatitude = currentPosition.latitude || 40.0497;
  // let currentLongitude = currentPosition.longitude || -105.2143;

  // let currentMarker = new google.maps.Marker({
  //   map,
  //   // position: { lat: 40.0497, lng: -105.2143 },
  //   position: { lat: currentPosition.latitude, lng: currentPosition.longitude },
  //   optimized: false,
  //   title: 'current location',
  // });

  // currentMarker.addListener('click', () => {
  //   infoWindow.close();
  //   infoWindow.setContent(`${currentMarker.getTitle()}`);
  //   infoWindow.open(currentMarker.getMap(), currentMarker);
  // });

  // let stateList = parkList.filter(park => park.state === stateTest);

  // const response = await fetch(`/api/map/campsite/${stateTest}`);
  // const list = response.json();
  // console.log(list);

  let list = await getList(state);

  let centerLat;
  let centerLng;

  selectedCampLat ? centerLat = selectedCampLat : centerLat = list[0].lat;
  selectedCampLng ? centerLng = selectedCampLng : centerLng = list[0].lng;

  console.log(zoomLevel, list[0].lat, list[0].lng )
  console.log(selectedCampLat, selectedCampLng, centerLat, centerLng)

  const map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: centerLat, lng: centerLng },
    zoom: zoomLevel || 3,
    mapTypeId: 'terrain',
  });

  // Create an info window to share between markers.
  const infoWindow = new google.maps.InfoWindow();

  // Create the markers.
  // myLatLng.forEach(({ lat, lng, name }, i) => {
  // parkList.forEach(({ lat, lng, name }, i) => {
  list.forEach(({ lat, lng, name, id }, i) => {

    if(lat && lng) {
    
      const contentString = `<h6 id="" class="" style="color: blue; text-decoration: underline"><a href="/api/map/campsite/:${id}">${name}</a></h6>`

      let selectedCampsiteIcon = "http://maps.google.com/mapfiles/kml/shapes/campground.png";
      let campsiteIcon = "http://maps.google.com/mapfiles/ms/icons/red-dot.png";

      const marker = new google.maps.Marker({
        position: { lat, lng },
        map,
        optimized: true,
        icon: lat === selectedCampLat ? selectedCampsiteIcon : campsiteIcon,
        // size: new google.maps.Size(20, 34),
        // This marker is 20 pixels wide by 32 pixels high.
        size: new google.maps.Size(50, 100),
        // title: `${i + 1}. ${name}`,
        // title: contentString,
        // label: `${i + 1}`,
        // icon: svgMarker,
      });

      // Add a click listener for each marker, and set up the info window.

      marker.addListener('click', () => {
        infoWindow.close();
        // infoWindow.setContent(`${marker.getTitle()}`);
        infoWindow.setContent(contentString);
        infoWindow.open(marker.getMap(), marker);
        if (lat !== selectedCampLat) {
          marker.setIcon("http://maps.google.com/mapfiles/ms/icons/blue-dot.png")
        }
        marker.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(() => {
          marker.setAnimation(null);
          // marker.setIcon("http://maps.google.com/mapfiles/ms/icons/red-dot.png")
        }, 1000);
      });
    }
  });

  renderSearchResults(list);
}

async function searchAutoComplete() {
  let rawCampsites = await getList();
  let campsites = rawCampsites.map(rawCampsites => rawCampsites.nameState);
  let campZipCodes = rawCampsites.map(rawCampsites => rawCampsites.zipCode)
  .filter(zipCode => zipCode !== null).sort();
  let combineLists = campZipCodes.concat(campsites);
  let autoCompleteList = [...new Set(combineLists)]; // remove duplicates

  $( "#search-input" ).autocomplete({
    minLength: 2,
    source: autoCompleteList,
  });
}

searchInput.addEventListener("keypress", async (event) => {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    event.preventDefault();
    let rawCampsites = await getList(); // get camp data from database
    let getState = rawCampsites.filter(camp => camp.nameState === searchInput.value); //get state for current search input
    console.log(getState);

    let selectedCampLat;
    let selectedCampLng;

    if (getState.length) { //get lat & lng for selected campsite to render blue marker
      selectedCampLat = getState[0].lat;
      selectedCampLng = getState[0].lng;
    }

    if (!getState.length) {getState = rawCampsites.filter(camp => camp.zipCode === searchInput.value)}; // if input is a zipcode get state
    let state = getState[0].state; // get state for first location in the array
    initMap(state, 6, selectedCampLat, selectedCampLng); // render map by passing state, map zoom level, selected camp lat & lng
  }
});

const getList = async (state) => {
  console.log(state)

  let result;

  if (!state) {
    result = await fetch(`/api/map/campsites-all`, {
      method: 'GET',
    });
    const json = await result.json();
    const list = json.filter(element => element.lat !== null || element.lng !== null);
    return list;

  } else {
    result = await fetch(`/api/map/campsite-list/${state}`, {
      method: 'GET',
    });
    const json = await result.json();
    const list = json.filter(element => element.lat !== null || element.lng !== null);
    return list;
  }
};

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
