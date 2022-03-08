const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Order extends Model {}

Order.init(
    //table column definitions
    {
     id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
     },
     total: {
         type: DataTypes.DECIMAL,
         allowNull: false,
         validate: {
             isDecimal: true
         }
     },
     order_status: {
         type: DataTypes.TEXT,
         allowNull: false
     },
      customer_id: {
          type: DataTypes.INTEGER,
          references: {
              model: 'user',
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
        //table configs
        //pass in our imported sequelize connection
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'order'
    }
);
module.exports = Order;