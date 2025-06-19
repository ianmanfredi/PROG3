const personasModel = require("../../models/mock/personas.models.js");

class PacientesController {
  async list(req, res) {
    res.status(200).json(await personasModel.getAllPersonas());
  }
}

module.exports = new PacientesController();
