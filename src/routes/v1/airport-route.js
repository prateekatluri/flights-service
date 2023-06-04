const express = require("express");
const { AirportController } = require("../../controllers");
const { logger } = require("../../config");
const { AirportMiddleWare } = require("../../middlewares");


logger.info("inside airport routes");

const router = express.Router();

router.post("/", AirportMiddleWare.validateCreateRequest, AirportController.createAirport);
router.get("/", AirportController.getAllAirports);
router.get("/:id",AirportController.getAirport);
router.delete("/:id",AirportController.deleteAirport);
router.patch("/",AirportController.updateAirport);

module.exports = router;
