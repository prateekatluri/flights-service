const { StatusCodes } = require("http-status-codes");
const { AirplaneService } = require("../services");
const { successResponse, errorResponse } = require("../utils/common");

async function createAirplane(req, res) {
  try {
    const data = await AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    successResponse.data = data;
    successResponse.message = "successfully created airplane";
    return res.status(StatusCodes.CREATED).json(successResponse);
  } catch (error) {
    errorResponse.error = error;
    return res.status(error.statuscode).json(errorResponse);
  }
}

module.exports = {
  createAirplane,
};
