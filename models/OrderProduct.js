const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class OrderProduct extends Model { }

OrderProduct.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        order_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'order',
                key: 'id'
            }
        },
        product_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'product',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'product_order',
    }
);

module.exports = OrderProduct;
