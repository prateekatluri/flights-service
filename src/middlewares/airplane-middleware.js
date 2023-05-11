const { StatusCodes } = require("http-status-codes");
const { errorResponse } = require("../utils/common");
const { AppError } = require("../utils/error");
const { logger } = require("../config");

const validateCreateRequest = (req, res, next) => {
  if (!req.body.modelNumber) {
    logger.info("modelNumber not found in info")
    errorResponse.error = new AppError(
      ["Model Number not found in the oncoming request in the correct form"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
  }
  next();
};

module.exports = validateCreateRequest;
