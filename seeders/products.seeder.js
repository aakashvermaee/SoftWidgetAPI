const { Seeder } = require("mongoose-data-seed"),
  { Product } = require("../app/products/product");

const data = [
  {
    name: "Soft Widget Generation 2",
    price: 30,
    sku: "SWGen2dx",
    description: `The SWGen2dx (conveniently the product SKU) is a revolutionary house-hold product everyone wants. It features a sleek casing with intuitive features.
    Features include: 
    Rock-solid audio engagement
    Silver-bullet touch response system 
    Long lasting rechargeable battery `,
    type: "house-hold"
  },
  {
    name: "Soft Widget Generation 1",
    price: 10,
    sku: "SWGen1dx",
    description: `The SWGen1dx (conveniently the product SKU) is a revolutionary house-hold product everyone wants. It features a sleek casing with intuitive features.
    Features include: 
    Rock-solid audio engagement
    Silver-bullet touch response system`,
    type: "house-hold"
  }
];

const ProductsSeeder = Seeder.extend({
  shouldRun: function() {
    return Product.countDocuments()
      .exec()
      .then(count => count === 0);
  },
  run: function() {
    return Product.create(data);
  }
});

module.exports = ProductsSeeder;
