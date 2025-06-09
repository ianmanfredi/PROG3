const { DataTypes } = require("sequelize");
const { sequelize } = require("./../config/db.js");

const Turno = sequelize.define("Turno", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  estado: {
    type: DataTypes.STRING,
    defaultValue: "reservado",
    validate: {
      isIn: [["reservado", "cancelado"]],
    },
  },
  pacienteId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = { Turno };
