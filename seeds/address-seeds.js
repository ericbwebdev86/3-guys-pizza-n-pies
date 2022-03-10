const { Address } = require('../models');

 

const addressData = [
  {
    street_address: '123 Easy Street',
    city_address: 'Funkytown',
    state_address: 'North Carolina',
    zip_address: '12345',
    customer_id: 1
  },
  {
    street_address: '456 Drewry Lane',
    city_address: 'Townbergville',
    state_address: 'South Carolina',
    zip_address: '67890',
    customer_id: 2
  },
  {
    street_address: '789 11th Ave',
    city_address: 'Nowhereton',
    state_address: 'Alabama',
    zip_address: '13579',
    customer_id: 3
  },
];

const seedAddress = () => Address.bulkCreate(addressData);

module.exports = seedAddress;