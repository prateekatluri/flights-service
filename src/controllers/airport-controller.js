const { StatusCodes, OK } = require("http-status-codes");
const { AirportService } = require("../services");
const { successResponse, errorResponse } = require("../utils/common");

/**
 *
 * POST
 * *params: name code address cityId
 */
async function createAirport(req, res) {
  try {
    const data = await AirportService.createAirport({
      name: req.body.name,
      code: req.body.code,
      address: req.body.address,
      cityId: req.body.cityId,
    });
    successResponse.data = data;
    successResponse.message = "successfully created airport";
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
async function getAllAirports(req, res) {
  try {
    const data = await AirportService.getAllAirports();
    successResponse.data = data;
    successResponse.message = "successfully fetched all airport";
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
async function getAirport(req, res) {
  try {
    const data = await AirportService.getAirport(req.params.id);
    successResponse.data = data;
    successResponse.message = "successfully fetched airport";
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
async function deleteAirport(req, res) {
  try {
    const data = await AirportService.deleteAirport(req.params.id);
    successResponse.data = data;
    successResponse.message = "successfully deleted airport";
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
async function updateAirport(req, res) {
  try {
    const data = await AirportService.updateAirport({
      id: req.body.id,
      data: {
        name: req.body.name,
        code: req.body.code,
        address: req.body.address,
        cityId: req.body.cityId,
      },
    });
    successResponse.data = data;
    successResponse.message = "successfully updated airport";
    return res.status(StatusCodes.CREATED).json(successResponse);
  } catch (error) {
    errorResponse.error = error;
    return res.status(error.statuscode).json(errorResponse);
  }
}

module.exports = {
  createAirport,
  getAllAirports,
  getAirport,
  deleteAirport,
  updateAirport,
};
