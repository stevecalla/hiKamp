const router = require('express').Router();
const { Comment, User } = require('../models');
const isAuthorized = require('../utils/auth');

// RENDER HOME PAGE UPON VISIT TO "localhost:3001/"
router.get('/', async (req, res) => {
  try {
    res.render('homepage', {
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// REDIRECT TO HOME PAGE AFTER LOGIN
// PATH "localhost:3001/login
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

// REDIRECT TO HOMEPAGE AFTER NEW USER IS CREATED / SIGNED UP
// PATH "localhost:3001/signup
router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('signup');
});

module.exports = router;
