const withAuth = (req, res, next) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    res.redirect("/login");
  }
  // If the user is logged in, allow them to view the paintings
  else {
    next();
  }
};

module.exports = withAuth;
