const { logger } = require("../config");
const { AirplaneRepository } = require("../repositories");
const { AppError } = require("../utils/error");
const { StatusCodes } = require("http-status-codes");
const airplane = new AirplaneRepository();

async function createAirplane(data) {
  try {
    const response = await airplane.create(data);
    return response;
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

async function getAllAirplanes() {
  try {
    const response = await airplane.getAll();
    return response;
  } catch (error) {
    logger.error("error at getall airplane service");
    throw new AppError("couldnt get the airplanes",StatusCodes.NOT_FOUND);
  }
}

async function getAirplane(id) {
  try {
    const response = await airplane.getByPk(id);
    return response;
  } catch (error) {
    if(error.statuscode === StatusCodes.NOT_FOUND) throw error;
    logger.error("error in airplane getbyPK service");
    throw new AppError("Error with server to get airplane wiht given id",StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function deleteAirplane(id) {
  try {
    const response = await airplane.delete(id);
    return response;
  } catch (error) {
    if(error.statuscode === StatusCodes.NOT_FOUND) throw error;
    logger.error("error in delete airplane service");
    throw new AppError("Error with server to delete airplane",StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function updateAirplane(data) {
  try {
    const response = await airplane.update(data);
    return response;
  } catch (error) {
    if(error.statuscode === StatusCodes.NOT_FOUND) throw error;
    logger.error("error at update airplane service");
    throw new AppError(
      "Cannot update Airplance",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}
module.exports = {
  createAirplane,
  getAllAirplanes,
  getAirplane,
  deleteAirplane,
  updateAirplane,
};
