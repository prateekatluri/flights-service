const { StatusCodes } = require("http-status-codes");
const { errorResponse } = require("../utils/common");
const { AppError } = require("../utils/error");
const { logger } = require("../config");

const validateCreateRequest = (req, res, next) => {
  if (!req.body.FlightNumber) {
    logger.info("FlightNumber not found in info");
    errorResponse.error = new AppError(
      ["FlightNumber not found in the incoming request in the correct form"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
  }
  if (!req.body.departureAirport) {
    logger.info("departureAirport not found in info");
    errorResponse.error = new AppError(
      [
        "departureAirport not found in the incoming request in the correct form",
      ],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
  }
  if (!req.body.arrivalAirport) {
    logger.info("arrivalAirport not found in info");
    errorResponse.error = new AppError(
      ["arrivalAirport not found in the incoming request in the correct form"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
  }
  if (!req.body.arrivalTime) {
    logger.info("arrivalTime not found in info");
    errorResponse.error = new AppError(
      ["arrivalTime not found in the incoming request in the correct form"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
  }
  if (!req.body.departureTime) {
    logger.info("departureTime not found in info");
    errorResponse.error = new AppError(
      ["departureTime not found in the incoming request in the correct form"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
  }
  if (!req.body.boardingGate) {
    logger.info("boardingGate not found in info");
    errorResponse.error = new AppError(
      ["boardingGate not found in the incoming request in the correct form"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
  }
  if (!req.body.totalSeats) {
    logger.info("totalSeats not found in info");
    errorResponse.error = new AppError(
      ["totalSeats not found in the incoming request in the correct form"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
  }
  next();
};

module.exports = {
  validateCreateRequest,
};
