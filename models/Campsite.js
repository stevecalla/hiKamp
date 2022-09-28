const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Campsite extends Model { }

Campsite.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        code: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
        },
        lat: {
            type: DataTypes.DECIMAL,
        },
        lng: {
            type: DataTypes.DECIMAL,
        },
        latlng: {
            type: DataTypes.STRING,
        },
        state: {
            type: DataTypes.STRING,
        },
        zipCode: {
            type: DataTypes.STRING,
        },
        city: {
            type: DataTypes.STRING,
        },
        address: {
            type: DataTypes.STRING,
        },
        nameState: {
            type: DataTypes.STRING,
        }
    },
    {
        sequelize,
        freezeTableName: true,
        modelName: "campsite",
    }

);


module.exports = Campsite;