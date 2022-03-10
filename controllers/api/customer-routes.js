const router = require('express').Router();
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
// expects {username: 'pizzaluvr69', password: 'S3cr3tS@uce'}
router.post('/', (req, res) => {
    Customer.create({
        username: req.body.username,
        password: req.body.password
    })
        .then(customerData => {
            req.session.save(() => {
                req.session.user_id = customerData.id;
                req.session.username = customerData.username;
                req.session.loggedIn = true;

                res.json(customerData);
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// post login - session save
router.post('/login', (req, res) => {
    // expects {"username": "pizzaluvr69", "password": "S3cr3tS@uce"}
    Customer.findOne({
        where: {
            username: req.body.username
        }
    }).then(customerData => {
        if (!customerData) {
            res.status(400).json({ message: 'No customer with that username!' });
            return;
        }

        const validPassword = customerData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password!' });
            return;
        }

        req.session.save(() => {
            req.session.customer_id = customerData.id;
            req.session.username = customerData.username;
            req.session.loggedIn = true;

            res.json({ user: customerData, message: 'You are now logged in!' });
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
// expects {"username": "SauceBauce", "password": "P!zzaTime"}
router.put('/:id', (req, res) => {
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
        .then(customerData => {
            if (!customerData) {
                res.status(404).json({ message: 'No customer found with this id' });
                return;
            }
            res.json(customerData);
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
        .then(customerData => {
            if (!customerData) {
                res.status(404).json({ message: 'No customer found with this id' });
                return;
            }
            res.json(customerData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;