const router = require('express').Router();
const axios = require('axios').default;
const { Campsite } = require('../../models');

// STARTS AT api/map

// RENDER ALL CAMPSTIES; PULLS ALL CAMPSITES FROM CAMPSITE DB
// EXAMPLE REQUEST "localhost:3001/api/map/campsites-all"
router.get('/campsites-all', async (req, res) => {
  console.log(req.params.state);
  try {
    const dbCampsiteData = await Campsite.findAll();

    const campsites = dbCampsiteData.map((camps) => camps.get({ plain: true }));

    res.send(campsites);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// EXAMPLE REQUEST "localhost:3001/api/map/campsite-list/texas"
router.get('/campsite-list/:state', async (req, res) => {
  console.log(req.params.state);
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

module.exports = router;
