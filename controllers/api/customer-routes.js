const router = require('express').Router();
const sequelize = require('../config/connection');
const { Customer, Order, Product, Review } = require('../../models');

// get all customers - exclude password
router.get('/', (req, res) => {
    Customer.findAll({
        attributes: { exclude: ['password'] }
    })
        .then(customerData => res.json(customerData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// get one customer - include orders, reviews
router.get('/:id', (req, res) => {
    Customer.findOne({
        attributes: { exclude: ['password'] },
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Order,
                attributes: ['id', 'total', 'order_status', 'created_at'],
                include: {
                    model: Product,
                    attributes: ['id', 'product_name', 'price']
                }
            },
            {
                model: Review,
                attributes: ['id', 'review_text', 'created_at']
            }
        ]
    })
        .then(customerData => {
            if (!customerData) {
                res.status(404).json({ message: 'No customer found with this id!' });
                return;
            }
            res.json(customerData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// create customer
router.post('/', (req, res) => {
    // expects {username: 'pizzaluvr69', password: 'S3cr3tS@uce'}
    Customer.create({
        username: req.body.username,
        password: req.body.password
    })
        .then(userData => {
            req.session.save(() => {
                req.session.user_id = userData.id;
                req.session.username = userData.username;
                req.session.loggedIn = true;

                res.json(userData);
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// post login - session save
router.post('/login', (req, res) => {
    // expects {username: 'pizzaluvr69', password: 'S3cr3tS@uce'}
    Customer.findOne({
        where: {
            username: req.body.username
        }
    }).then(userData => {
        if (!userData) {
            res.status(400).json({ message: 'No user with that username!' });
            return;
        }

        const validPassword = userData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password!' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.username = userData.username;
            req.session.loggedIn = true;

            res.json({ user: userData, message: 'You are now logged in!' });
        });
    });
});

// post logout - session destroy
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

// update customer info - username, password
router.put('/:id', (req, res) => {
    // expects {username: 'SauceBauce', password: 'P!zzaTime'}

    Customer.update(
        {
            username: req.body.username,
            password: req.body.password
        },
        {
            individualHooks: true,
            where: {
                id: req.params.id
            }
        })
        .then(userData => {
            if (!userData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(userData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// delete customer
router.delete('/:id', (req, res) => {
    Customer.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(userData => {
            if (!userData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(userData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;