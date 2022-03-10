const Customer = require('./Customer');
const Product = require('./Product');
const Order = require('./Order');
const Review = require('./Review');
const Address = require('./Address');
const OrderProduct = require('./OrderProduct');

//associations
Review.hasOne(Customer, {
    foreignKey: 'customer_id'
});
Review.belongsTo(Customer, {
    foreignKey: 'customer_id',
});
Order.hasMany(Product, {
    foreignKey: 'product_id'
});
Product.belongsToMany(Order, {
    through: OrderProduct,
    foreignKey: 'product_id'
})
Order.belongsToMany(Product, {
    through: OrderProduct,
    foreignKey: 'order_id'
})
Order.hasOne(Customer, {
    foreignKey: 'customer_id'
});
Order.hasOne(Address, {
    foreignKey: 'address_id'
})
Address.hasOne(Customer, {
    foreignKey: 'customer_id'
});
Address.belongsTo(Customer, {
    foreignKey: 'customer_id'
})


module.exports = { Customer, Product, Order, Review, Address, OrderProduct };