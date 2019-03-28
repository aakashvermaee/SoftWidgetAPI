const orders = require('../app/orders'),
  products = require('../app/products');

const ordersApiRoutes = [
  {
    method: 'POST',
    url: '/api/order',
    handler: orders.createOrder
  },
  {
    method: 'GET',
    url: '/api/order/:id',
    handler: orders.getOrder
  },
  {
    method: 'PUT',
    url: '/api/order/:id',
    handler: orders.updateOrder
  },
  {
    method: 'DELETE',
    url: '/api/order/:id',
    handler: orders.deleteOrder
  }
];

const productsApiRoutes = [
  {
    method: 'GET',
    url: '/api/products',
    handler: products.getProducts
  }
];

exports.apiRoutes = [ordersApiRoutes, productsApiRoutes];
