const router = require("express").Router();

const userRoutes = require("./user-routes");
const weatherRoutes = require("./weather-routes");

router.use("/users", userRoutes);
router.use("/weather", weatherRoutes);

module.exports = router;
