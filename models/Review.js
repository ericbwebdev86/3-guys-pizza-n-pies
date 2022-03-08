const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Review extends Model {}

Review.init(
    //table column definitions
    {
     id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
     },
     review_text: {
         type: DataTypes.TEXT,
         allowNull: false,
         validate: {
             len: [3]
         }
     },
      customer_id: {
          type: DataTypes.INTEGER,
          references: {
              model: 'customer',
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
        modelName: 'review'
    }
);
module.exports = Review;