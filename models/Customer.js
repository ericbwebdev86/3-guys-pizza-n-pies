const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');
//create User model

class Customer extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

//define table columns and configuration
Customer.init(
    //table column definitions
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                //password must be at least 8 charcters long
                len: [8]
            }
        },
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
    },

    {
        hooks: {
            async beforeCreate(newCustomerData) {
                newCustomerData.password = await bcrypt.hash(newCustomerData.password, 10);
                return newCustomerData;
            },
            async beforeUpdate(updatedCustomerData) {
                updatedCustomerData.password = await bcrypt.hash(updatedCustomerData.password, 10);
                return updatedCustomerData;
            }
        },
        //table configs
        //pass in our imported sequelize connection
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'customer'
    }
);

module.exports = Customer;