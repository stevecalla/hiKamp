const router = require('express').Router();
const isNotValid = require('../../utils/isNotValid');
const isAuthorized = require('../../utils/auth');
const axios = require('axios').default;
const { Comment, User, Favorite, Campsite } = require('../../models');

// route starts at api/campsites

// ROUTE RETRIEVES ALL DATA NECESSARY TO RENDER THE CAMPSITE PAGE USING THE CAMPSITE ID
// RETRIEVES NATIONAL PARK SERVICE DATA, COMMENTS, FAVORITES, LOGGEDIN STATUS, IF CURRENT CAMPSITE IS FAVORITE
// RENDERS ALL DATA TO USERCAMPS HANDBARS PAGE

// MIDDLE ENSURES URL IS VALID -- -- AND USER IS AUTHORIZED (IS LOGGED IN)
router.get('/:id', isNotValid, isAuthorized, async (req, res) => {
  try {
    const key = process.env.NPS_API;
    const response = await axios.get(
      `https://developer.nps.gov/api/v1/campgrounds?id=${req.params.id}&api_key=${key}`
    );

    // RETRIEVE COMMENTS FOR THE CURRENT RENDERED CAMPSITE
    const allComments = await Comment.findAll({
      include: [{ model: User }, { model: Campsite }],
      where: { campsite_id: req.params.id },
    });

    const comments = allComments.map((comment) => comment.get({ plain: true }));

    // RETRIEVE FAVORITES FOR THIS USER
    const allFavorites = await Favorite.findAll({
      include: [{ model: User }, { model: Campsite }],
      where: { user_id: req.session.userId },
    });

    const favorites = allFavorites.map((favorite) =>
      favorite.get({ plain: true })
    );

    // IF RENDERED CAMPSITE IS ALSO A FAVORITE RETURN TRUE
    const favoriteCamps = favorites.map((camps) => camps.campsite.camp_id);
    let isCurrentCampAFavorite = favoriteCamps.includes(req.params.id);

    res.render('userCamps', {
      campData: response.data.data,
      comments: comments,
      favorites: favorites,
      loggedIn: req.session.loggedIn,
      isFavorite: isCurrentCampAFavorite,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json(err);
  }
});

module.exports = router;
