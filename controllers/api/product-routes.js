const router = require('express').Router();
const { Product } = require('../../models');

// get all products
router.get('/', (req, res) => {
    Product.findAll()
        .then(productData => res.json(productData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// get one product
router.get('/:id', (req, res) => {
    Product.findOne({
        where: {
            id: req.params.id
        },
    })
        .then(productData => res.json(productData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// create product
// expects {"product_name":"Buffalo Chicken Bacon Pizza", "price":"17.99"}
router.post('/', (req, res) => {
    Product.create({
        product_name: req.body.product_name,
        price: req.body.price
    })
        .then(productData => res.json(productData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// update product
// expects {"product_name":"Buffalo Chicken Bacon Mac n Cheese Pizza", "price":"19.99"}
router.put('/:id', (req, res) => {
    Product.update(req.body,
        {
            where: {
                id: req.params.id
            }
        })
        .then(productData => {
            if (!productData) {
                res.status(404).json({ message: 'No product found with this id!' });
                return;
            }
            res.json(productData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// delete product
router.delete('/:id', (req, res) => {
    Product.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(productData => {
            if (!productData) {
                res.status(404).json({ message: 'No product found with this id!' });
                return;
            }
            res.json(productData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;