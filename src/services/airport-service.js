const { logger } = require("../config");
const { AirportRepository } = require("../repositories");
const { AppError } = require("../utils/error");
const { StatusCodes } = require("http-status-codes");
const airport = new AirportRepository();

async function createAirport(data) {
  try {
    const response = await airport.create(data);
    return response;
  } catch (error) {
    logger.error("error at create airport service");
    if (error.name == "SequelizeValidationError") {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw new AppError(
      "Cannot create a new Airport object",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAllAirports() {
  try {
    const response = await airport.getAll();
    return response;
  } catch (error) {
    logger.error("error at getall airport service");
    throw new AppError("couldnt get the airports", StatusCodes.NOT_FOUND);
  }
}

async function getAirport(id) {
  try {
    const response = await airport.getByPk(id);
    return response;
  } catch (error) {
    if (error.statuscode === StatusCodes.NOT_FOUND) throw error;
    logger.error("error in airport getbyPK service");
    throw new AppError(
      "Error with server to get airport wiht given id",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function deleteAirport(id) {
  try {
    const response = await airport.delete(id);
    return response;
  } catch (error) {
    if (error.statuscode === StatusCodes.NOT_FOUND) throw error;
    logger.error("error in delete airport service");
    throw new AppError(
      "Error with server to delete airport",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

/**
 *
 *
 */
async function updateAirport(data) {
  try {
    const response = await airport.update(data);
    return response;
  } catch (error) {
    if (error.statuscode === StatusCodes.NOT_FOUND) throw error;
    logger.error("error at update airport service");
    throw new AppError(
      "Cannot update Airport",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}
module.exports = {
  createAirport,
  getAllAirports,
  getAirport,
  deleteAirport,
  updateAirport,
};
