const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Address extends Model {}

Address.init(
    //table column definitions
    {
        street_address: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        city_address: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        state_address: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        zip_address: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            validate: {
                len: [5]
            }
        },
        customer_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'customer',
                key: 'id'
            }
        },
    },   
    {
        //table configs
        //pass in our imported sequelize connection
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'address'
    }
);
module.exports = Address;

