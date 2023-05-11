const { logger } = require("../config");
const { AirplaneRepository } = require("../repositories");
const { AppError } = require("../utils/error");
const { StatusCodes } = require("http-status-codes");
const airplane = new AirplaneRepository();

async function createAirplane(data) {
  try {
    const res = await airplane.create(data);
    return res;
  } catch (error) {
    logger.error("error at create airplane service");
    if (error.name == "SequelizeValidationError") {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw new AppError(
      "Cannot create a new Airplance object",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  createAirplane,
};
