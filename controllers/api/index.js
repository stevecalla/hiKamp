const router = require("express").Router();

const userRoutes = require("./user-routes");
// const weatherRoutes = require("./weather-routes");
const mapRoutes = require("./map-routes");
const parkRoutes = require("./park-routes");
const campRoutes = require("./camp-routes");
const commentsRoutes = require("./comment-routes")

router.use("/users", userRoutes);
// router.use("/weather", weatherRoutes);
router.use("/map", mapRoutes);
router.use("/park", parkRoutes);
router.use("/campsites", campRoutes);
router.use("/comments", commentsRoutes);

module.exports = router;
