const router = require('express').Router();
const isAuthorized = require("../../utils/auth");
const axios = require('axios').default;
// const parkList = require('../../public/js/parkList');
// const { campsite } = require("../models");
const { Campsite } = require('../../models');

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

router.get("/campsites-all", async (req, res) => {
  console.log(req.params.state)
  try {
    const dbCampsiteData = await Campsite.findAll();

    const campsites = dbCampsiteData.map((camps) => camps.get({ plain: true }));

    res.send(campsites);

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/campsite-list/:state", async (req, res) => {
  console.log(req.params.state)
  try {
    const dbCampsiteData = await Campsite.findAll({
      where: {
        // state: "NJ",
        state: req.params.state,
      },
    });

    const campsites = dbCampsiteData.map((camps) => camps.get({ plain: true }));

    res.send(campsites);

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/campsite/:id', async (req, res) => {
  // console.log(req.params.id);
  // res.json(req.params.id)
  
  try {
    res.render('campsite-mock', {
      project: req.params.id,
      logged_in: req.session.logged_in
    });

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