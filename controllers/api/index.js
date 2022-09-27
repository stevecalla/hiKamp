const router = require("express").Router();

const userRoutes = require("./user-routes");
const weatherRoutes = require("./weather-routes");
const mapRoutes = require("./map-routes");
const parkRoutes = require("./park-routes");

router.use("/users", userRoutes);
router.use("/weather", weatherRoutes);
router.use("/map", mapRoutes);
router.use("/park", parkRoutes);

module.exports = router;
