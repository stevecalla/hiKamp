const router = require('express').Router();
const isNotValid = require('../../utils/isNotValid');
const isAuthorized = require('../../utils/auth');
const axios = require('axios').default;
const { Comment, User, Favorite, Campsite } = require('../../models');

// route starts at api/campsites
router.get('/:id', isNotValid, isAuthorized, async (req, res) => {
  try {
    const key = process.env.NPS_API;
    const response = await axios.get(
      `https://developer.nps.gov/api/v1/campgrounds?id=${req.params.id}&api_key=${key}`
    );

    const allComments = await Comment.findAll({
      include: [{ model: User }, { model: Campsite }],
      where: { campsite_id: req.params.id },
    });

    const comments = allComments.map((comment) => comment.get({ plain: true }));

    const allFavorites = await Favorite.findAll({
      include: [{ model: User }, { model: Campsite }],
      where: { user_id: req.session.userId },
    });

    const favorites = allFavorites.map((favorite) =>
      favorite.get({ plain: true })
    );

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
