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
        email: {
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
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        street_address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        street_address2: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        city_address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        state_address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        zip_address: {
            type: DataTypes.INTEGER,
            allowNull: false,
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