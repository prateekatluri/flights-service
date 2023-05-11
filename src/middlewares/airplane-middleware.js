const { StatusCodes } = require("http-status-codes");
const { errorResponse } = require("../utils/common");

const validateCreateRequest = (req, res, next) => {
  if (!req.body.modelNumber) {
    errorResponse.message = "modelNumber is not found";
    res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
  }
  next();
};

module.exports = validateCreateRequest;
