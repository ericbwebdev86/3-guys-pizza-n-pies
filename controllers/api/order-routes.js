const router = require('express').Router();
const { Customer, Order, Product, OrderProduct } = require('../../models');

// get all orders
router.get('/', (req, res) => {
    Order.findAll({
        attributes: ['id', 'total', 'order_status', 'created_at'],
        include: [
            {
                model: Product,
                attributes: ['id', 'product_name', 'price'],
                // through: OrderProduct,
                // as: 'ordered_products'
            },
            {
                model: Customer,
                attributes: ['username']
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
router.get('/', (req, res) => {
    Order.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'total', 'order_status', 'created_at'],
        include: [
            {
                model: Product,
                attributes: ['id', 'product_name', 'price']
            },
            {
                model: Customer,
                attributes: ['username']
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
// NEEDS withAuth
router.post('/', (req, res) => {
    Order.create({
        total: req.body.total,
        order_status: req.body.order_status
    })
        .then(orderData => res.json(orderData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// req.body should look like this...
// {
//     total: 123,
//     order_status: "Out for Delivery",
//     orderedProductIds: [1, 2, 3, 4]
// }
// router.post('/', (req, res) => {
//     Order.create(req.body)
//         .then((order) => {
//             if(req.body.orderedProductIds.length) {
//                 const orderedProductIdsArr = req.body.orderedProductIds.map((product_id) => {
//                     return {
//                         order_id: order.id,
//                         product_id,
//                     };
//                 });
//                 return OrderProduct.bulkCreate(orderedProductIdsArr);
//             }
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });

// update order
// NEEDS withAuth
// expects {"total":52.19, "order_status":"Pending"}
router.put('/:id', (req, res) => {
    Order.update({
        total: req.body.total,
        order_status: req.body.order_status
    })
        .then(orderData => res.json(orderData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// delete order
router.delete('/:id', (req, res) => {
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