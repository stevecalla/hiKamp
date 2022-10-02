const router = require('express').Router();
const isNotValid = require('../../utils/isNotValid');
const isAuthorized = require('../../utils/auth');
const axios = require('axios').default;
const { Comment, User, Favorite, Campsite } = require('../../models');

// route starts at api/campsites

// router.get('/', async (req, res) => {
//   try {
//     const key = process.env.NPS_API;
//     const response = await axios.get(`https://developer.nps.gov/api/v1/campgrounds?id=1241C56B-7003-4FDF-A449-29DA8BCB0A41&api_key=${key}`);

//     console.log('RESPONSE = ', JSON.stringify(response.data));

//     const allComments = await Comment.findAll({
//       include: [{ model: User }],
//       //where: { user_id: req.session.userId },
//     });
//     // console.log(allComments)
//     const comments = allComments.map((comment) => comment.get({ plain: true }));
//     // res.json(comments)
//     // console.log("+++++++++++++++++++++++++++", comments)

//     // const allFavorites = await Favorite.findAll(
//     //   {
//     //       include: [{ model: User }, { model: Campsite }],
//     //       where: { user_id: req.session.userId },
//     // });
//     // const favorite = allFavorites.map((favorite) => favorite.get({ plain: true }));

//     console.log(req.session);
//     // console.log(favorite)

//     res.render('userCamps', {
//       campData: response.data.data,
//       // favorites: favorite,
//       comments: comments,
//       logged_in: req.session.logged_in,
//     });
//   } catch (error) {
//     console.error(error);
//   }
// });

router.get('/:id', isNotValid, isAuthorized, async (req, res) => {
  try {
  const key = process.env.NPS_API;
  const response = await axios.get(`https://developer.nps.gov/api/v1/campgrounds?id=${req.params.id}&api_key=${key}`);

  // console.log(response.data.data);

  const allComments = await Comment.findAll({
    include: [{ model: User }, { model: Campsite}],
    where: { campsite_id: req.params.id },
  });
  
  const comments = allComments.map((comment) => comment.get({ plain: true }));

  // console.log(comments);

  const allFavorites = await Favorite.findAll({
    include: [{ model: User }, { model: Campsite}],
    where: { user_id: req.session.userId },
  });
  
  const favorites = allFavorites.map((favorite) => favorite.get({ plain: true }));

  // console.log(favorites);
  // console.log(req.session);

  console.log(req.session);
  console.log(req.session.loggedIn);

  res.render('userCamps', {
    campData: response.data.data,
    comments: comments,
    favorites: favorites,
    loggedIn: req.session.loggedIn,
  });
  } catch (error) {
    console.error(error);
    res.status(500).json(err);
  }
});

// weather api get request
// router.get('/', async (req, res) => {
//   console.log('hello=======================================');

//   try {
//     const key = process.env.WEATHER_ONECALL;
//     const response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=40.0497&lon=-105.2143&exclude=hourly,minutely&appid=${key}`);

//   console.log('RESPONSE = ', JSON.stringify(response.data));
//     // This is how we SEND the API data back to the user, using Handlebars
//     //res.json(response.data);
//     res.render('userCamps', {
//       weather: response.data,
//       logged_in: req.session.logged_in
//     });

//   } catch (error) {
//     console.error(error);
//   }
// });

module.exports = router;
