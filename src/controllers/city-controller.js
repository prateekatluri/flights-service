const  {StatusCodes}  = require("http-status-codes");
const { CityService } = require("../services");
const { successResponse, errorResponse } = require("../utils/common/index");

async function createCity(req, res) {
  try {
    const data = await CityService.createCity({
      name: req.body.name,
    });
    successResponse.data = data;
    res.status(StatusCodes.OK).json(successResponse);
  } catch (error) {
    errorResponse.error = error;
    res.status(error.statuscode).json(errorResponse);
  }
}

/**
 *
 * GET
 *
 */
async function getAllCities(req, res) {
  try {
    const data = await CityService.getAllCities();
    successResponse.data = data;
    res.status(StatusCodes.OK).json(successResponse);
  } catch (error) {
    errorResponse.error = error;
    res.status(error.statuscode).json(errorResponse);
  }
}

/**
 *
 * GET
 * URL PARAM :id
 */
async function getCity(req, res) {
  try {
    const data = await CityService.getCity(req.params.id);
    successResponse.data = data;
    res.status(StatusCodes.OK).json(successResponse);
  } catch (error) {
    errorResponse.error = error;
    res.status(error.statuscode).json(errorResponse);
  }
}

/**
 *
 * DELETE
 * URL PARAM :id
 */
async function deleteCity(req, res) {
  try {
    const data = await CityService.deleteCity(req.params.id);
    successResponse.data = data;
    res.status(StatusCodes.OK).json(successResponse);
  } catch (error) {
    errorResponse.error = error;
    res.status(error.statuscode).json(errorResponse);
  }
}

/**
 *
 * POST
 * BODY - id , capacity
 */
async function updateCity(req, res) {
  try {
    const data = await CityService.updateCity({
      id: req.body.id,
      data:{name: req.body.name},
    });
    successResponse.data = data;
    successResponse.message = "successfully updated city";
    return res.status(StatusCodes.CREATED).json(successResponse);
  } catch (error) {
    errorResponse.error = error;
    return res.status(error.statuscode).json(errorResponse);
  }
}

module.exports = {
  createCity,
  getAllCities,
  getCity,
  updateCity,
  deleteCity,
};
