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
        camp_id: {
            type: DataTypes.TEXT,
        },
        code: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
        },
        lat: {
            type: DataTypes.DOUBLE(9, 6),
        },
        lng: {
            type: DataTypes.DOUBLE(9, 6),
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
        },
        favorite_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "favorite",
                key: "id",
            },
        },
    },
    {
        sequelize,
        freezeTableName: true,
        modelName: "campsite",
    }

);


module.exports = Campsite;