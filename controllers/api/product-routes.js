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