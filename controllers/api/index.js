const router = require("express").Router();

const userRoutes = require("./user-routes");
const weatherRoutes = require("./weather-routes");
const campRoutes = require("./camp-routes");

router.use("/users", userRoutes);
router.use("/weather", weatherRoutes);
router.use("/campsites", campRoutes);

module.exports = router;
