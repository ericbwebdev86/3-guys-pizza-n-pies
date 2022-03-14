const { Order } = require('../models');

   

const orderData = [
  {
    total: 55.55,
    order_status: 'Completed',
    customer_id: 1,
    poduct_id: 1,
  },
  {
    total: 44.44,
    order_status: 'Pending',
    customer_id: 2,
    poduct_id: 2,
  },
  {
    total: 66.66,
    order_status: 'Completed',
    customer_id: 3,
    poduct_id: 3,
  },
  
];

const seedOrder = () => Order.bulkCreate(orderData);

module.exports = seedOrder;
