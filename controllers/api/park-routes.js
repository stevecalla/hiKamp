const router = require('express').Router();
const isAuthorized = require('../../utils/auth');
const axios = require('axios').default;

// ROUTE USED TO GET CAMP INFO FOR LOCAL DB
// EXAMPLE "localhost:3001/api/park"
// LONG TERM SHOULD AUTOMATE THIS PROCESS TO PULL IN CAMPSITE NAMES/STATES WEEKLY
router.get('/', async (req, res) => {
  try {
    const response = await axios.get(
      `https://developer.nps.gov/api/v1/campgrounds?limit=626?&api_key=sjsH0PhPRSMzPFiZEohC8IjAeDvFOYvXzDjsetql`
    );
    const parks = response.data.data.map(
      (element) => ({
        id: element.id,
        code: element.parkCode,
        name: element.name,
        lat: parseFloat(element.latitude),
        lng: parseFloat(element.longitude),
        latLong: element.latLong,
        state:
          element.addresses.length > 0 ? element.addresses[0].stateCode : null,
        zipCode:
          element.addresses.length > 0
            ? parseInt(element.addresses[0].postalCode)
            : null,
        city: element.addresses.length > 0 ? element.addresses[0].city : null,
        address:
          element.addresses.length > 0 ? element.addresses[0].address : null,
        nameState:
          element.addresses.length > 0
            ? `${element.name}, ${element.addresses[0].stateCode}`
            : element.name,

        // parkAmenities: element.Amenities,
        // parkFees: element.Fees,
        // parkState: element.addresses.map(state => state.stateCode).join(' '),
        // parkState: element.addresses.map(state => state.stateCode),
        // parkZipCode: element.addresses.map(state => state.postalCode),
        // parkCity: element.addresses.map(state => state.city),
        // parkAddress: element.addresses.map(state => state.address),
      }),
      {}
    );
    // .filter(element => element.state === null)

    // console.log(parks)

    res.json(parks);
  } catch (error) {
    console.error(error);
  }
});
module.exports = router;
