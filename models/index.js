const Customer = require('./Customer');
const Product = require('./Product');
const Order = require('./Order');
const Review = require('./Review');

//associations
Customer.hasMany(Review, {
    foreignKey: 'user_id'
});
Review.belongsTo(Customer, {
    foreignKey: 'user_id',
});

Order.hasMany(Product, {
    foreignkey: 'user_id'
});
Customer.hasMany(Order, {
    foreignKey: 'order_id'
});

module.exports = { Customer, Product, Order, Review };