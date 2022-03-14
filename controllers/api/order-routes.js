const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Customer, Order, Product, OrderProduct } = require('../../models');

// get all orders
router.get('/', (req, res) => {
    Order.findAll({
        attributes: ['id', 'total', 'order_status', 'created_at'],
        include: [
            {
                model: Product,
                attributes: ['id', 'product_name', 'price'],
                through: OrderProduct,
            },
            {
                model: Customer,
                attributes: { exclude: ['password'] }
            }
        ]
    })
        .then(orderData => res.json(orderData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// get one order
router.get('/:id', (req, res) => {
    Order.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'total', 'order_status', 'created_at'],
        include: [
            {
                model: Product,
                attributes: ['id', 'product_name', 'price'],
                through: OrderProduct,
            },
            {
                model: Customer,
                attributes: { exclude: ['password'] }
            }
        ]
    })
        .then(orderData => {
            if (!orderData) {
                res.status(404).json({ message: 'No order found with this id' });
                return;
            }
            res.json(orderData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// create order
// expects
// {
//     total: 123,
//     order_status: "Out for Delivery",
//     orderedProductIds: [1, 2, 3, 4]
// }
router.post('/', withAuth, (req, res) => {
    Order.create(
        req.body,
        {
            customer_id: req.session.customer_id
        })
        .then((order) => {
            if (req.body.orderedProductIds.length) {
                const orderedProductIdsArr = req.body.orderedProductIds.map((product_id) => {
                    return {
                        order_id: order.id,
                        product_id,
                    };
                });
                return OrderProduct.bulkCreate(orderedProductIdsArr);
            }
            res.status(200).json(order);
        })
        .then((orderedProducts) => res.status(200).json(orderedProducts))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// update order
// expects {"total":52.19, "order_status":"Pending"}
router.put('/:id', withAuth, (req, res) => {
    Order.update(
        {
            total: req.body.total,
            order_status: req.body.order_status
        },
        {
            where: {
                id: req.params.id
            }
        })
        .then(orderData => res.json(orderData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// delete order
router.delete('/:id', withAuth, (req, res) => {
    Order.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(orderData => {
            if (!orderData) {
                res.status(404).json({ message: 'No order found with this id' });
                return;
            }
            res.json(orderData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;