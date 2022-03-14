const seedProducts = require('./product-seeds');
const seedCustomers = require('./customer-seeds');
const seedReviews = require('./review-seeds');
const seedOrders = require('./order-seeds');
const seedOrderProduct = require('./order-product-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await seedCustomers();
  console.log('\n----- CUSTOMERS SEEDED -----\n');

  await seedReviews();
  console.log('\n----- REVIEWS SEEDED -----\n');

  await seedOrders();
  console.log('\n----- ORDERS SEEDED -----\n');

  await seedOrderProduct();
  console.log('\n----- ORDERS SEEDED -----\n');
  process.exit(0);
};

seedAll();