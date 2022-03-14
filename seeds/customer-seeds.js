const { Customer } = require('../models');


const customerData = [
  {
    username: 'test1',
    password: 'test1234',
    street_address: '123 Easy Street',
    city_address: 'Funkytown',
    state_address: 'North Carolina',
    zip_address: '12345',
  },
  {
    username: 'test2',
    password: 'test1234',
    street_address: '456 Drewry Lane',
    city_address: 'Townbergville',
    state_address: 'South Carolina',
    zip_address: '67890',
  },
  {
    username: 'test3',
    password: 'test1234',
    street_address: '789 11th Ave',
    city_address: 'Nowhereton',
    state_address: 'Alabama',
    zip_address: '13579',
  },
];

const seedCustomer = () => Customer.bulkCreate(customerData);

module.exports = seedCustomer;
