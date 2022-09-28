const router = require('express').Router();
const isAuthorized = require("../../utils/auth");
const axios = require('axios').default;

//section: api/weather

router.get('/', async (req, res) => {
  // console.log('hello');
  // res.json('hello');

  // AXIOS (https://axios-http.com/docs/intro) (npm i axios) in an async/await fashion  
  try {
    const key = process.env.WEATHER_ONECALL;
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=40.0497&lon=-105.2143&exclude=hourly,minutely&appid=${key}`);

    // console.log('RESPONSE = ', JSON.stringify(response.data));
    // res.json(JSON.stringify(response.data));
    // This is how we SEND the API data back to the user, using Handlebars

    // res.json(response.data);

    res.render('weather', {
      project: response.data,
      logged_in: req.session.logged_in
    });

  } catch (error) {
    console.error(error);
  }
});

module.exports = router;