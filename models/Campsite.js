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
        },
        lng: {
            type: DataTypes.DECIMAL,
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
        underscored: true,
        modelName: "comment",
    }

);





module.exports = Campsite;