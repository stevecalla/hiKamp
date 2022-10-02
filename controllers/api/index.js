const router = require("express").Router();

const userRoutes = require("./user-routes");
// const weatherRoutes = require("./weather-routes");
const mapRoutes = require("./map-routes");
const parkRoutes = require("./park-routes");
const campRoutes = require("./camp-routes");
const favoriteRoutes = require("./favorite-routes");

router.use("/users", userRoutes);
// router.use("/weather", weatherRoutes);
router.use("/map", mapRoutes);
router.use("/park", parkRoutes);
router.use("/campsites", campRoutes);
router.use("/favorite", favoriteRoutes);

module.exports = router;
