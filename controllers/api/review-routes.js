const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Review, Customer } = require('../../models');

// get all reviews
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
                attributes: ['username']
            }
        ]
    })
        .then(reviewData => res.json(reviewData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// create review
// expects {"review_text": "Who knew pizza went so well with pie? This place is awesome!"}
router.post('/', withAuth, (req, res) => {
    Review.create({
        review_text: req.body.review_text,
        customer_id: req.session.customer_id
    })
        .then(reviewData => res.json(reviewData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// update review
// expects {"review_text": "food good"}
router.put('/:id', withAuth, (req, res) => {
    Review.update(
        {
            review_text: req.body.review_text,
        },
        {
            where: {
                id: req.params.id
            }
        })
        .then(reviewData => {
            if (!reviewData) {
                res.status(404).json({ message: 'No review found with this id' });
                return;
            }
            res.json(reviewData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// delete review
router.delete('/:id', withAuth, (req, res) => {
    Review.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(reviewData => {
            if (!reviewData) {
                res.status(404).json({ message: 'No review found with this id!' });
                return;
            }
            res.json(reviewData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;