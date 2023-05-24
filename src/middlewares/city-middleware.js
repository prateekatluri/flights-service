const { StatusCodes } = require("http-status-codes");
const { errorResponse, successResponse } = require("../utils/common");

function validateCreateRequest(req, res) {
  if (!req.body.name) {
    errorResponse.error = "Name field cannot be empty";
    return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
  }
  next();
}

module.exports = {
    validateCreateRequest,
}
