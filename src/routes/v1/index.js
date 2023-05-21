const express = require("express");
const router = express.Router();
const AirplaneRoutes = require("./airplane-route");
const CityRoutes = require("./city-route");
const { logger } = require("../../config");

logger.info("inside v1 routes");

// Routes for Airplane
router.use("/airplanes", AirplaneRoutes);

// Routes for Cities
router.use("/cities", CityRoutes);

router.get("/", () => {});

module.exports = router;
