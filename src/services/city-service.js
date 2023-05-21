const { StatusCodes } = require("http-status-codes");
const { CityRepository } = require("../repositories");
const { AppError } = require("../utils/error");
const { logger } = require("../config");
const city = new CityRepository();

async function createCity(data) {
  try {
    const response = await city.create(data);
    return response;
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    console.log(error);
    throw new AppError(
      "Problem with creating new city",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAllCities() {
  try {
    const response = await city.getAll();
    return response;
  } catch (error) {
    console.log(error)
    logger.error("error at getall city service");
    throw new AppError("couldnt get the city", StatusCodes.NOT_FOUND);
  }
}

async function getCity(id) {
  try {
    const response = await city.getByPk(id);
    return response;
  } catch (error) {
    if (error.statuscode === StatusCodes.NOT_FOUND) throw error;
    logger.error("error in city getbyPK service");
    throw new AppError(
      "Error with server to get city wiht given id",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function deleteCity(id) {
  try {
    const response = await city.delete(id);
    return response;
  } catch (error) {
    if (error.statuscode === StatusCodes.NOT_FOUND) throw error;
    logger.error("error in delete city service");
    throw new AppError(
      "Error with server to delete city",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function updateCity(data) {
  try {
    const response = await city.update(data);
    return response;
  } catch (error) {
    if (error.statuscode === StatusCodes.NOT_FOUND) throw error;
    logger.error("error at update city service");
    throw new AppError(
      "Cannot update Airplance",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}
module.exports = {
  createCity,
  getAllCities,
  getCity,
  deleteCity,
  updateCity,
};
