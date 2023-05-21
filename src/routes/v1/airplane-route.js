const express = require("express");
const { AirplaneController } = require("../../controllers");
const { logger } = require("../../config");
const { AirplaneMiddleWare } = require("../../middlewares");


logger.info("inside airplane routes");

const router = express.Router();

router.post("/", AirplaneMiddleWare, AirplaneController.createAirplane);
router.get("/", AirplaneController.getAllAirplanes);
router.get("/:id",AirplaneController.getAirplane);
router.delete("/:id",AirplaneController.deleteAirplane);
router.patch("/",AirplaneController.updateAirplane);

module.exports = router;
