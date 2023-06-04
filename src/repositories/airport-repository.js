const { Airport } = require("../models");
const CrudRepository = require("./crudrepository");

class AirportRepository extends CrudRepository {
  constructor() {
    super(Airport);
  }
}

module.exports = AirportRepository
