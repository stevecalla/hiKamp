const router = require('express').Router();
const isAuthorized = require('../../utils/auth');
const axios = require('axios').default;
const { Comment, User, Favorite, Campsite } = require('../../models');

// route starts at api/campsites

router.get('/', async (req, res) => {
  try {
    const key = process.env.NPS_API;
    const response = await axios.get(`https://developer.nps.gov/api/v1/campgrounds?id=1241C56B-7003-4FDF-A449-29DA8BCB0A41&api_key=${key}`);

console.log('RESPONSE = ', JSON.stringify(response.data));

const allComments = await Comment.findAll(
  {
      include: [{ model: User }],
      //where: { user_id: req.session.userId },
});
// console.log(allComments)
const comments = allComments.map((comment) => comment.get({ plain: true }));
// res.json(comments)
// console.log("+++++++++++++++++++++++++++", comments)

const allFavorites = await Favorite.findAll(
  {
      include: [{ model: User }, { model: Campsite }],
      where: { user_id: req.session.userId },
});
const favorite = allFavorites.map((favorite) => favorite.get({ plain: true }));

console.log(req.session)
console.log(favorite)

res.render('userCamps', {
  campData: response.data.data,
  favorites: favorite,
  comments: comments,
  logged_in: req.session.logged_in
});

} catch (error) {
console.error(error);
}
});


// https://developer.nps.gov/api/v1/campgrounds?id?limit=5?&api_key=sjsH0PhPRSMzPFiZEohC8IjAeDvFOYvXzDjsetql

// GET route for 1 campground search by user

router.get('/:id', async (req, res) => {
  console.log(req.params)

  try {
    const key = process.env.NPS_API;
    // const response = await axios.get(`https://developer.nps.gov/api/v1/campgrounds?id=1241C56B-7003-4FDF-A449-29DA8BCB0A41&api_key=${key}`);
    const response = await axios.get(`https://developer.nps.gov/api/v1/campgrounds?id=${req.params.id}&api_key=${key}`);

console.log('LINE 34 RESPONSE = ', JSON.stringify(response.data));
console.log('==========================================')
 //   res.end()
let test = response.data.data.map(element => element.id)

  //   //res.json(response.data)
  console.log(test)
      res.render('userCamps', {
        campData: response.data.data,
        logged_in: req.session.logged_in,
      });     
   } catch (err) {
    console.log(err);
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


// GET route for comments
// router.get('/', async (req, res) => {
//   try {
//     const allComments = await Comment.findAll(
//         {
//             include: [{ model: User }],
//             //where: { user_id: req.session.userId },
//     });
//     console.log(allComments)
//     const comments = allComments.map((comment) => comment.get({ plain: true }));
//    // res.json(comments)
//     res.render('userCamps', {
//         comments,
//        // loggedIn: res.session.loggedIn
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });



// router.get('/campsites/:id', async (req, res) => {
//   console.log(req.params.id)
//   try {
//     const key = process.env.NPS_API;
//     const response = await axios.get(`https://developer.nps.gov/api/v1/campgrounds?id=${id}&api_key=${key}`,
//       {
//         data: {
//           id: req.params.id,
//         }
//       }  
//   )
// console.log('RESPONSE = ', JSON.stringify(response.id));
// console.log('==========================================')
    
//   let test = response.data.data.id.map(element => element.id)
//   //   //res.json(response.data)
//   console.log(test)
//       res.render('userCamps', {
//         campData: response.data.data.id,
//         logged_in: req.session.logged_in,
//       });     
//    } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });




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