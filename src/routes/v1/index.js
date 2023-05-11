const express = require("express")
const router = express.Router()
const AirplaneRoutes = require("./airplane-route")
const {logger} = require("../../config")

logger.info("inside v1 routes")
router.use("/airplanes",AirplaneRoutes)

router.get("/",()=>{})

module.exports = router