const isNotValid = (req, res, next) => {
  // If req.params.id is not valid redirect to homepage
  console.log(req.params.id === "null", req.params.id === false);
  if (req.params.id.length !== '3A770067-D79E-413F-AF38-D879707B79B6'.length) {
    res.redirect("/");
  }
  // If req.params.id is valid, go to next step
  else {
    next();
  }
};

module.exports = isNotValid;
