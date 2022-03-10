const router = require('express').Router();
const { Review } = require('../../models');

// get all reviews
router.get('/', (req, res) => {
    Review.findAll()
        .then(reviewData => res.json(reviewData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// create review
// NEEDS withAuth
// expects {"review_text": "Who knew pizza went so well with pie? This place is awesome!"}
router.post('/', (req, res) => {
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
// NEEDS withAuth
// expects {"review_text": "food good"}
router.put('/:id', (req, res) => {
    Review.update(
        {
            review_text: req.body.review_text
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
// NEEDS withAuth
router.delete('/:id', (req, res) => {
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