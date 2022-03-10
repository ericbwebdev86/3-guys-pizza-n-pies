const { Review } = require('../models');


const reviewData = [
  {
    review_text: 'Wow this pizza is so good and the pies are great!',
    customer_id: 1
  },
  {
    review_text: 'I ordered a slice of each pizza and they are all good!',
    customer_id: 2
  },
  {
    review_text: '0/10 this does not taste anything like McDonalds',
    customer_id: 3
  },
];

const seedReview = () => Review.bulkCreate(reviewData);

module.exports = seedReview;