const express = require("express");
const router = express.Router();
const AirplaneRoutes = require("./airplane-route");
const AirportRoutes = require("./airport-route");
const CityRoutes = require("./city-route");
const FlightRoutes = require("./flight-route")
const { logger } = require("../../config");

logger.info("inside v1 routes");

// Routes for Airplane
router.use("/airplanes", AirplaneRoutes);

// Routes for Cities
router.use("/cities", CityRoutes);

// Routes for Airport
router.use("/airports", AirportRoutes);

// Routes for flight
router.use("/flights", FlightRoutes);

//dummy route
router.get("/", () => {});

module.exports = router;
