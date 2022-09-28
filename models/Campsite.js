const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Campsite extends Model { }

Campsite.init(
    {
        code: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lat: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        lng: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        latlng: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        state: {
            type: DataTypes.STRING,
        },
        zipCode: {
            type: DataTypes.INTEGER,
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