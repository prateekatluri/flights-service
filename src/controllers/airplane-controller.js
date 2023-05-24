const { StatusCodes, OK } = require("http-status-codes");
const { AirplaneService } = require("../services");
const { successResponse, errorResponse } = require("../utils/common");

/**
 *
 * POST
 * BODY - modelNumber , capacity
 */
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

/**
 *
 * GET
 *
 */
async function getAllAirplanes(req, res) {
  try {
    const data = await AirplaneService.getAllAirplanes();
    successResponse.data = data;
    return res.status(StatusCodes.OK).json(successResponse);
  } catch (error) {
    errorResponse.error = error;
    return res.status(error.statuscode).json(errorResponse);
  }
}

/**
 *
 * GET
 * URL PARAM :id
 */
async function getAirplane(req, res) {
  try {
    const data = await AirplaneService.getAirplane(req.params.id);
    successResponse.data = data;
    return res.status(StatusCodes.OK).json(successResponse);
  } catch (error) {
    errorResponse.error = error;
    return res.status(error.statuscode).json(errorResponse);
  }
}

/**
 *
 * DELETE
 * URL PARAM :id
 */
async function deleteAirplane(req, res) {
  try {
    const data = await AirplaneService.deleteAirplane(req.params.id);
    successResponse.data = data;
    return res.status(StatusCodes.OK).json(successResponse);
  } catch (error) {
    errorResponse.error = error;
    return res.status(error.statuscode).json(errorResponse);
  }
}

/**
 *
 * POST
 * BODY - id , capacity
 */
async function updateAirplane(req, res) {
  try {
    const data = await AirplaneService.updateAirplane({
      id: req.body.id,
      data: { capacity: req.body.capacity },
    });
    successResponse.data = data;
    successResponse.message = "successfully updated airplane";
    return res.status(StatusCodes.CREATED).json(successResponse);
  } catch (error) {
    errorResponse.error = error;
    return res.status(error.statuscode).json(errorResponse);
  }
}

module.exports = {
  createAirplane,
  getAllAirplanes,
  getAirplane,
  deleteAirplane,
  updateAirplane,
};
