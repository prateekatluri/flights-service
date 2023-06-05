const { StatusCodes, OK } = require("http-status-codes");
const { FlightService } = require("../services");
const { successResponse, errorResponse } = require("../utils/common");

/**
 *
 * POST
 * 
 */
async function createFlight(req, res) {
  try {
    const data = await FlightService.createFlight({
      FlightNumber: req.body.FlightNumber,
      airplaneId: req.body.airplaneId,
      departureAirport: req.body.departureAirport,
      arrivalAirport: req.body.arrivalAirport,
      arrivalTime:req.body.arrivalTime,
      departureTime:req.body.departureTime,
      price:req.body.price,
      boardingGate:req.body.boardingGate,
      totalSeats:req.body.totalSeats,
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
