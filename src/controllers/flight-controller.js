const { StatusCodes, OK } = require("http-status-codes");
const { FlightService } = require("../services");
const { successResponse, errorResponse } = require("../utils/common");

/**
 *
 * POST
 * *params: name code address cityId
 */
async function createFlight(req, res) {
  try {
    const data = await AirportService.createFlight({
        name: req.body.name,
        code: req.body.code,
        address: req.body.address,
        cityId: req.body.cityId,
    });
    successResponse.data = data;
    successResponse.message = "successfully created Flight";
    return res.status(StatusCodes.CREATED).json(successResponse);
  } catch (error) {
    errorResponse.error = error;
    return res.status(error.statuscode).json(errorResponse);
  }
}


module.exports = {
  createFlight,
};
