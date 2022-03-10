const { Product } = require('../models');



const productData = [
  {
    product_name: '16" Cheese Pizza',
    price: 12.99,
  },
  {
    product_name: '16" Pepperoni Pizza',
    price: 13.99,
  },
  {
    product_name: '16" Sausage Pizza',
    price: 13.99,
  },
  {
    product_name: '16" Supreme Pizza',
    price: 14.99,
  },
  {
    product_name: '16" Meat Lovers Pizza',
    price: 14.99,
  },
  {
    product_name: '16" Hawaiian Pizza',
    price: 13.99,
  },
  {
    product_name: '16" BBQ Pizza',
    price: 13.99,
  },
  {
    product_name: '16" Buffalo Chicken Pizza',
    price: 14.99,
  },
  {
    product_name: 'Garlic Breadsticks',
    price: 3.99,
  },
  {
    product_name: 'Cheese Sticks',
    price: 3.99,
  },
  {
    product_name: 'Cinnamon Sticks',
    price: 12.99,
  },
  {
    product_name: '20oz Soda',
    price: 1.99,
  },
  {
    product_name: '2 liter Soda',
    price: 2.99,
  },
  {
    product_name: 'Pumpkin Pie',
    price: 10.99,
  },
  {
    product_name: 'Pumpkin Pie Slice',
    price: 1.49,
  },
  {
    product_name: 'Pecan Pie',
    price: 10.99,
  },
  {
    product_name: 'Pecan Pie Slice',
    price: 1.49,
  },
  {
    product_name: 'Apple Pie',
    price: 10.99,
  },
  {
    product_name: 'Apple Pie Slice',
    price: 1.49,
  },
  {
    product_name: 'Extra Cheese',
    price: 1.99,
  },
  {
    product_name: 'Extra Pepperoni',
    price: 1.99,
  },
  {
    product_name: 'Extra Sausage',
    price: 1.99,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
