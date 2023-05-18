const { StatusCodes } = require("http-status-codes");
const { logger } = require("../config");
const { AppError } = require("../utils/error");

class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    const response = await this.model.create(data);
    return response;
  }

  async getAll() {
    const response = await this.model.findAll();
    return response;
  }
  async getByPk(data) {
    const response = await this.model.findByPk(data);
    if (!response)
      throw new AppError("airplane id not found", StatusCodes.NOT_FOUND);
    return response;
  }
  async delete(data) {
    const response = await this.model.destroy({
      where: {
        id: data,
      },
    });
    if (response === 0)
      throw new AppError("No such id exists to delete", StatusCodes.NOT_FOUND);
    return response;
  }
  async update({ id, capacity }) {
    const response = await this.model.update(
      { capacity: capacity },
      {
        where: {
          id: id,
        },
      }
    );
    console.log(response)
    if (response[0] === 0)
      throw new AppError("No such id exists", StatusCodes.NOT_FOUND);
    return response;
  }
}

module.exports = CrudRepository;
