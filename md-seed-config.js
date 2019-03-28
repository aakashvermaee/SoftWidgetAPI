const config = require("./config/config")
let mongoUrl;

if(config.env == "test") {
  mongoUrl = config.mongoUrlTest
}
else if(config.env == "development") {
  mongoUrl = config.mongoUrl
}

const mongooseLib = require("mongoose"),
  productsSeeder = require("./seeders/products.seeder");

mongooseLib.Promise = global.Promise || Promise;

module.exports = {
  // Export the mongoose lib
  mongoose: mongooseLib,

  // Export the mongodb url
  mongoURL: mongoUrl,

  /*
    Seeders List
    ------
    order is important
  */
  seedersList: {
    productsSeeder
  }
};
