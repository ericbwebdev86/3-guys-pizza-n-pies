const router = require('express').Router();

const customerRoutes = require('./customer-routes.js');
const productRoutes = require('./product-routes');
const orderRoutes = require('./order-routes')
const reviewRoutes = require('./review-routes');

router.use('/customers', customerRoutes);
router.use('/products', productRoutes)
router.use('/orders', orderRoutes);
router.use('/reviews', reviewRoutes);

module.exports = router;
