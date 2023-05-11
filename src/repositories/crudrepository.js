class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const response = await this.model.create(data);
      return response;
    } catch (err) {
      console.log("error at create");
      throw err;
    }
  }
  async getAll() {
    try {
      const response = await this.model.findAll();
      return response;
    } catch (err) {
      console.log("error at findall");
    }
  }
  async get(data) {
    try {
      const response = await this.model.findByPk(data);
      return response;
    } catch (err) {
      console.log("error at findpk");
    }
  }
  async delete(data) {
    try {
      const response = await this.model.destroy({
        where: {
          id: data,
        },
      });
      return response;
    } catch (err) {
      console.log("error at delete");
    }
  }
  async update(id, data) {
    try {
      const response = await this.model.update(data, {
        where: {
          id: id,
        },
      });
      return response;
    } catch (err) {
      console.log("error at update");
    }
  }
}

module.exports = CrudRepository;
