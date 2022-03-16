const { OrderProduct } = require('../models');

const orderProductData = [
    {
        order_id: 1,
        product_id: 1
    },
    {
        order_id: 1,
        product_id: 2
    },
    {
        order_id: 1,
        product_id: 3
    },
    {
        order_id: 2,
        product_id: 4
    },
    {
        order_id: 2,
        product_id: 5
    },
    {
        order_id: 2,
        product_id: 6
    },
    {
        order_id: 3,
        product_id: 17
    },
    {
        order_id: 3,
        product_id: 37
    },
    {
        order_id: 3,
        product_id: 7
    },
    {
        order_id: 3,
        product_id: 27
    },
]

const seedOrderProduct = () => OrderProduct.bulkCreate(orderProductData);

module.exports = seedOrderProduct;