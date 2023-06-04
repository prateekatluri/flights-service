const { logger } = require("../config");
const { FlightRepository } = require("../repositories");
const { AppError } = require("../utils/error");
const { StatusCodes } = require("http-status-codes");
const flight = new FlightRepository();

async function createFlight(data) {
  try {
    const response = await flight.create(data);
    return response;
  } catch (error) {
    logger.error("error at create flight service");
    if (error.name == "SequelizeValidationError") {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw new AppError(
      "Cannot create a new flight object",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  createFlight,
};
