"use strict";
const { Model } = require("sequelize");
const airplane = require("./airplane");
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Airplane, {
        foreignKey: "airplaneId",
        onDelete: "CASCADE",
      });
      this.belongsTo(models.Airport, {
        foreignKey: "departureAirport",
        onDelete: "CASCADE",
      });
      this.belongsTo(models.Airport, {
        foreignKey: "arrivalAirport",
        onDelete: "CASCADE",
      });
    }
  }
  Flight.init(
    {
      FlightNumber: { type: DataTypes.STRING, allowNull: false },
      airplaneId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      departureAirport: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      arrivalAirport: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      arrivalTime: { type: DataTypes.DATE, allowNull: false },
      departureTime: { type: DataTypes.DATE, allowNull: false },
      boardingGate: { type: DataTypes.STRING, allowNull: false },
      totalSeats: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "Flight",
    }
  );
  return Flight;
};
