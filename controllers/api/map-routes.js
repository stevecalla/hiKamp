const router = require('express').Router();
const isAuthorized = require("../../utils/auth");
const axios = require('axios').default;

//section: api/weather

router.get('/', async (req, res) => {
  // console.log('hello');
  // res.json('hello');

  try {
    res.render('map')

  } catch (error) {
    console.error(error);
  }
});

module.exports = router;