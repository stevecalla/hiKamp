const router = require('express').Router();
const isAuthorized = require("../../utils/auth");
const axios = require('axios').default;
const parkList = require('../../public/js/parkList');

//section: api/map

router.get('/', async (req, res) => {
  // console.log('hello');
  // res.json('hello');

  try {
    res.render('map')

  } catch (error) {
    console.error(error);
  }
});

router.post('/', async (req, res) => {
  console.log('hello post');
  console.log(req.body);
  // console.log(parkList)

  // console.log(parkList.map(element => console.log(element.name)));
  // res.json('hello');

  try {
    res.render('map')

  } catch (error) {
    console.error(error);
  }
});

module.exports = router;