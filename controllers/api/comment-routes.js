const router = require('express').Router();
const { Comment, User } = require('../../models');
//const isAuthorized = require('../../utils/auth');

//section: api/comments
// router.get('/', async (req, res) => {
//   try {
//     const allComments = await Comment.findAll(
//         {
//             include: [{ model: User }],
//             //where: { user_id: req.session.userId },
//     });
//     const comments = allComments.map((comment) => comment.get({ plain: true }));
//    //res.json(comments)
//     res.render('comments', {
//         comments,
//        // loggedIn: res.session.loggedIn
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// GET route for one comment

router.get('/:id', async (req, res) => {
  try {
    const oneComment = await Comment.findByPk(req.params.id, {
            include: [{ model: User }],
            //where: { user_id: req.session.userId },
    });
  
    const comment = oneComment.get({ plain: true });
   res.json(comment)
    res.render('comments', {
        comment,
       // loggedIn: res.session.loggedIn
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
