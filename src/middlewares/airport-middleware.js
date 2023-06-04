const { StatusCodes } = require("http-status-codes");
const { errorResponse } = require("../utils/common");
const { AppError } = require("../utils/error");
const { logger } = require("../config");

const validateCreateRequest = (req, res, next) => {
  if (!req.body.name) {
    logger.info("name not found in info");
    errorResponse.error = new AppError(
      ["name not found in the incoming request in the correct form"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
  }
  if (!req.body.code) {
    logger.info("code not found in info");
    errorResponse.error = new AppError(
      ["code not found in the incoming request in the correct form"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
  }
  if (!req.body.cityId) {
    logger.info("cityId not found in info");
    errorResponse.error = new AppError(
      ["cityId not found in the incoming request in the correct form"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
  }
  next();
};

module.exports = {
  validateCreateRequest,
};
