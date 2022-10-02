const router = require('express').Router();
const isAuthorized = require("../../utils/auth");
const axios = require('axios').default;
const { Favorite } = require('../../models');

// starts at /api/favorite

// CREATE AND SAVE FAVORITE
router.post("/", async (req, res) => {
  // if (req.body) {
  //   res.json (req.body)
  // } else {
  //   res.send('hello')
  // }
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

// // DELETE POST BASED ON REQUEST BY USER
router.delete("/:id", isAuthorized, async (req, res) => {
  try {
    const deletedPost = await Favorite.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!deletedPost || deletedPost[0] === 0) {
      res
        .status(404)
        .json({ message: "Can't delete. No product found with that id!" });
      return;
    }

    res.status(200).json(deletedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;