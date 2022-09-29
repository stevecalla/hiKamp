const router = require('express').Router();
const isAuthorized = require('../../utils/auth');
const axios = require('axios').default;

router.get('/', async (req, res) => {

  try {
    const key = process.env.NPS_API;
    const response = await axios.get(`https://developer.nps.gov/api/v1/campgrounds?id=1241C56B-7003-4FDF-A449-29DA8BCB0A41&api_key=${key}`);

console.log('RESPONSE = ', JSON.stringify(response.data));
//res.json(JSON.stringify(response.data));
// This is how we SEND the API data back to the user, using Handlebars
//res.json(response.data);
res.render('userCamps', {
  campData: response.data.data,
  logged_in: req.session.logged_in
});

} catch (error) {
console.error(error);
}
});

// url for search by id https://developer.nps.gov/api/v1/campgrounds?id=EA81BC45-C361-437F-89B8-5C89FB0D0F86&limit=5?&api_key=sjsH0PhPRSMzPFiZEohC8IjAeDvFOYvXzDjsetql
// router.get('/campsites/:id', async (req, res) => {
//   try {
//     const key = process.env.NPS_API;
//     let parkCode;
//   const parkSearchTerm = searchParkEl.value || searchTerm;
//   for (let i = 0; i < allParks.length; i++) {
//     if (parkSearchTerm == allParks[i].name) {
//       parkCode = allParks[i].code;
//     }
//   }
    //const response = await axios.get(`https://developer.nps.gov/api/v1/campgrounds?limit=5?&api_key=${key}`);

//     console.log('RESPONSE = ', JSON.stringify(response.campID));
//     // res.json(JSON.stringify(response.data));
//    let test = response.data.data.id //map(element => element.id)
//     //res.json(response.data)
//     console.log(test)

//     res.render('campsite-test', {
//       campData: response.data.data.id
//       //logged_in: req.session.logged_in
//     });

//     console.log(response, "___________________________")
//   } catch (error) {
//     console.error(error);
//   }
// });

module.exports = router;