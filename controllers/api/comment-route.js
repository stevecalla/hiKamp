const router = require('express').Router();
//const isNotValid = require('../../utils/null');
const isAuthorized = require('../../utils/auth');
//const axios = require('axios').default;
const { Comment, User, Campsite } = require('../../models');

// at api/campsites endpoint

// POST new comment
router.post('/:id', isAuthorized, async (req, res) => {
  try {
    const newComment = await Comment.create(req.params.id, {
            include: [{ model: User }, { model: Campsite }],
            where: { user_id: req.session.userId },
    });
  
    // const comment = oneComment.({ plain: true });
   res.json(newComment)
    res.render('userCamps', {
        newComment,
        loggedIn: res.session.loggedIn
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// LOGIN
// router.post('/login', async (req, res) => {
//   try {
//     const dbUserData = await User.findOne({
//       where: {
//         email: req.body.email,
//       },
//     });

//     if (!dbUserData) {
//       res
//         .status(400)
//         .json({ message: 'Incorrect email or password. Please try again!' });
//       return;
//     }

//     const validPassword = await dbUserData.checkPassword(req.body.password);

//     if (!validPassword) {
//       res
//         .status(400)
//         .json({ message: 'Incorrect email or password. Please try again!' });
//       return;
//     }

//     req.session.save(() => {
//       req.session.loggedIn = true;
//       req.session.userId = dbUserData.id;

//       res
//         .status(200)
//         .json({ user: dbUserData, message: 'You are now logged in!' });
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// // LOGOUT
// router.post('/logout', (req, res) => {
//   if (req.session.loggedIn) {
//     req.session.destroy(() => {
//       res.status(204).end();
//     });
//   } else {
//     res.status(404).end();
//   }
// });

// // ROUTE ASSIGNS USER ID TO REQ.SESSION.USERID FOR NEW USER POST IN LINE 5
// router.post('/userid', async (req, res) => {
//   const dbNewUserIdData = await User.findOne({
//     where: { email: req.body.email }
//   });

//   req.session.save(() => {
//     req.session.loggedIn = true;
//     req.session.userId = dbNewUserIdData.id;
//     res.status(200).json(dbNewUserIdData);
//   });
// })



module.exports = router;
