// const router = require('express').Router();
// const isAuthorized = require('../../utils/auth');
// const { Comment, User, Campsite } = require('../../models');

// at api/campsites endpoint

// POST new comment
// router.post('/:id', isAuthorized, async (req, res) => {
//   try {
//     const newComment = await Comment.create(req.params.id, {
//             include: [{ model: User }, { model: Campsite }],
//             where: { user_id: req.session.userId },
//     });
  
//    res.json(newComment)
//     res.render('userCamps', {
//         newComment,
//         loggedIn: res.session.loggedIn
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// module.exports = router;
