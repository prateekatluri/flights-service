const { logger } = require("../config");
const { FlightRepository } = require("../repositories");
const { successResponse } = require("../utils/common");
const { AppError } = require("../utils/error");
const { StatusCodes } = require("http-status-codes");
const { Op } = require("sequelize");
const flight = new FlightRepository();

async function createFlight(data) {
  try {
    const response = await flight.create(data);
    return response;
  } catch (error) {
    logger.error("error at create flight service");
    if (error.name == "SequelizeValidationError") {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw new AppError(
      "Cannot create a new flight object",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAllFlights(queryParams){
  const filter = {}
  let sortFilter;
  const dayEnd = " 23:59:59"
  try {
    if(queryParams.trips){
      const [departureAirport ,arrivalAirport] = queryParams.trips.split("-");
      filter.departureAirport = departureAirport;
      filter.arrivalAirport = arrivalAirport;
    }
    if(queryParams.price){
      const [minPrice,maxPrice] = queryParams.price.split("-");
      filter.price = {
        // change max price limit if needed
        [Op.between] : [minPrice?minPrice:0,maxPrice?maxPrice:50000]
      }
    }
    if(queryParams.travellers){
      filter.totalSeats = {
        // change max price limit if needed
        [Op.gte] : queryParams.travellers
      }
    }
    if(queryParams.tripDate){
      filter.departureTime = {
        // change max price limit if needed
        [Op.between] :[queryParams.tripDate,queryParams.tripDate+dayEnd]
        // [Op.gte]:queryParams.tripDate
      }
    }
    if(queryParams.sort){
      sort_query_list = queryParams.sort.split(",")
      sortFilter= sort_query_list.map(val => val.split("_"))
    }
    const response = await flight.getAllFlights(filter,sortFilter);
    return response;
  }
  catch(error)
  {
    console.log(error)
    if (error.name == "SequelizeValidationError") {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw new AppError("Error in fetching flight details",StatusCodes.INTERNAL_SERVER_ERROR)
  }
}

module.exports = {
  createFlight,
  getAllFlights
};
