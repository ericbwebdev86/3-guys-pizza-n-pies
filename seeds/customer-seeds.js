const { Customer } = require('../models');

const customerData = [
  {
    username: 'test1',
    password: 'test1234',
  },
  {
    username: 'test2',
    password: 'test1234',
  },
  {
    username: 'test3',
    password: 'test1234',
  },
];

const seedCustomer = () => Customer.bulkCreate(customerData);

module.exports = seedCustomer;
