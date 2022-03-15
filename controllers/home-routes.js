const router = require('express').Router();
const { Op } = require('sequelize');
const sequelize = require('../config/connection');
const { Review, Customer, Product } = require('../models');

// route to homepage view
router.get('/', (req, res) => {
    Review.findAll({
        attributes: [
            'id',
            'review_text',
            'created_at'
        ],
        include: [
            {
                model: Customer,
                attributes: ['first_name']
            }
        ]
    })
        .then(reviewData => {
            const reviews = reviewData.map(review => review.get({ plain: true }));

            res.render('homepage', {
                reviews,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// route to login view
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

// route to register view
router.get('/register', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('register');
});

// route to menu view
router.get('/menu', (req, res) => {
    res.render('menu', {
        loggedIn: req.session.loggedIn
    });
});

// route to pizza menu view
router.get('/pizza', (req, res) => {
    res.render('pizza', {
        loggedIn: req.session.loggedIn
    });
});

// route to pie menu view
router.get('/pie', (req, res) => {
    res.render('pie', {
        loggedIn: req.session.loggedIn
    });
});

module.exports = router;