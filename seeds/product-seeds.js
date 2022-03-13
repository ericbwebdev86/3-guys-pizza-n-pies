const { Product } = require('../models');



const productData = [
  {
    product_name: '12" Cheese Pizza',
    price: 11.99,
  },
  {
    product_name: '14" Cheese Pizza',
    price: 12.99,
  },
  {
    product_name: '16" Cheese Pizza',
    price: 13.99,
  },
  {
    product_name: '12" Pepperoni King',
    price: 11.99,
  },
  {
    product_name: '14" Pepperoni King',
    price: 12.99,
  },
  {
    product_name: '16" Pepperoni King',
    price: 13.99,
  },
  {
    product_name: '12" Sausage Pizza',
    price: 11.99,
  },
  {
    product_name: '14" Sausage Pizza',
    price: 12.99,
  },
  {
    product_name: '16" Sausage Pizza',
    price: 13.99,
  },
  {
    product_name: '12" Supreme',
    price: 12.99,
  },
  {
    product_name: '14" Supreme',
    price: 13.99,
  },
  {
    product_name: '16" Supreme',
    price: 14.99,
  },
  {
    product_name: '12" The Butcher',
    price: 12.99,
  },
  {
    product_name: '14" The Butcher',
    price: 13.99,
  },
  {
    product_name: '16" The Butcher',
    price: 14.99,
  },
  {
    product_name: '12" Hawaiian Pizza',
    price: 11.99,
  },
  {
    product_name: '14" Hawaiian Pizza',
    price: 12.99,
  },
  {
    product_name: '16" Hawaiian Pizza',
    price: 13.99,
  },
  {
    product_name: '12" BBQ Chicken Pizza',
    price: 12.99,
  },
  {
    product_name: '14" BBQ Chicken Pizza',
    price: 13.99,
  },
  {
    product_name: '16" BBQ Chicken Pizza',
    price: 14.99,
  },
  {
    product_name: '12" Buffalo Chicken Pizza',
    price: 12.99,
  },
  {
    product_name: '14" Buffalo Chicken Pizza',
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
    product_name: 'Key Lime Pie',
    price: 10.99,
  },
  {
    product_name: 'Key Lime Pie Slice',
    price: 1.49,
  },
  {
    product_name: 'French Silk Pie',
    price: 10.99,
  },
  {
    product_name: 'Franch Silk Pie Slice',
    price: 1.49,
  },
  {
    product_name: 'Pie of the week',
    price: 10.99,
  },
  {
    product_name: 'Pie of the week Slice',
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
