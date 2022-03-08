const State = require("../models/state.model");
const Person = require("../models/person.model");

module.exports = class EmployeeController {
  async list(req, res, next) {
    const list = await Person.findAll();
    res.send(list);
  }

  async get(req, res, next) {
    // TODO: Implementar código
    const id = req.params.id;
  }

  async update(req, res, next) {
    // TODO: Implementar código
    const id = req.params.id;
  }

  async create(req, res, next) {
    // TODO: Implementar código
  }

  async delete(req, res, next) {
    // TODO: Implementar código
    const id = req.params.id;
  }
};
