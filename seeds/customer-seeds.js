const { Customer } = require('../models');


const customerData = [
  {
    email: 'reg.fancy@gmail.com',
    password: 'test1234',
    first_name: 'Reginald',
    last_name: 'Fancypants',
    street_address: '123 Easy Street',
    street_address2: 'Suite A',
    city_address: 'Funkytown',
    state_address: 'North Carolina',
    zip_address: '12345',
  },
  {
    email: 'prepared04@gmail.com',
    password: 'test1234',
    first_name: 'Illidan',
    last_name: 'Stormrage',
    street_address: '456 Drewry Lane',
    street_address2: 'PO BOX 1',
    city_address: 'Townbergville',
    state_address: 'South Carolina',
    zip_address: '67890',
  },
  {
    email: 'emoodly.doodly@gmail.com',
    password: 'test1234',
    first_name: 'Ned',
    last_name: 'Flanders',
    street_address: '789',
    street_address2: '11th Ave',
    city_address: 'Nowhereton',
    state_address: 'Alabama',
    zip_address: '13579',
  },
];

const seedCustomer = () => Customer.bulkCreate(customerData);

module.exports = seedCustomer;
