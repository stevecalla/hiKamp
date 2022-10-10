const router = require('express').Router();
const isAuthorized = require('../../utils/auth');
const axios = require('axios').default;
const { Favorite } = require('../../models');

// STARTS AT /api/favorite

// CREATE AND SAVE FAVORITE
router.post('/', async (req, res) => {
  try {
    const dbFavoriteData = await Favorite.create({
      user_id: req.session.userId,
      campsite_id: req.body.id,
      campsite_img_url: req.body.url,
    });
    res.status(200).json(dbFavoriteData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// // DELETE FAVORITE BASED ON REQUEST BY USER
router.delete('/', async (req, res) => {
  try {
    const deletedFavorite = await Favorite.destroy({
      where: {
        user_id: req.session.userId,
        campsite_id: req.body.id,
      },
    });
    if (!deletedFavorite || deletedFavorite[0] === 0) {
      res
        .status(404)
        .json({ message: "Can't delete. No product found with that id!" });
      return;
    }
    res.status(200).json(deletedFavorite);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
