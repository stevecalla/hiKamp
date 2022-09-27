const router = require('express').Router();
const isAuthorized = require("../../utils/auth");
const axios = require('axios').default;
//section: api/park
router.get('/', async (req, res) => { 
  try {
    // const response = await axios.get(`https://developer.nps.gov/api/v1/campgrounds?limit=626?&api_key=sjsH0PhPRSMzPFiZEohC8IjAeDvFOYvXzDjsetql`);

    const response = await axios.get(`https://developer.nps.gov/api/v1/campgrounds?stateCode=co&limit=700&api_key=sjsH0PhPRSMzPFiZEohC8IjAeDvFOYvXzDjsetql`);


    // section: Alex's Key sjsH0PhPRSMzPFiZEohC8IjAeDvFOYvXzDjsetql

    // section: Steve's Key MH8zkV4gnt9hFQC4r8NKJE2lZXbrXkCZzbgy4EAi

    // GET "https://developer.nps.gov/api/v1/campgrounds?limit=700"

    // console.log('RESPONSE = ', JSON.stringify(response.data));
    // res.json(response.data.total, response.data.data);

    const parks = response.data.data.map((element) => ({
      // code: element.parkCode,
      name: element.name,
      lat: parseFloat(element.latitude),
      lon: parseFloat(element.longitude),
      // latLong: element.latLong,
      // state: element.addresses.length > 0 ? element.addresses[0].stateCode : null,
      // zipCode: element.addresses.length > 0 ? element.addresses[0].postalCode : null,
      // city: element.addresses.length > 0 ? element.addresses[0].city : null,
      // address: element.addresses.length > 0 ? element.addresses[0].address : null,
      // nameState: element.addresses.length > 0 ? `${element.name}, ${element.addresses[0].stateCode}` : element.name,

      // parkAmenities: element.Amenities,
      // parkFees: element.Fees,
      // parkState: element.addresses.map(state => state.stateCode).join(' '),
      // parkState: element.addresses.map(state => state.stateCode),
      // parkZipCode: element.addresses.map(state => state.postalCode),
      // parkCity: element.addresses.map(state => state.city),
      // parkAddress: element.addresses.map(state => state.address),
    }),{})

    // console.log(parks)

    res.json(parks);
  } catch (error) {
    console.error(error);
  }
});
module.exports = router;