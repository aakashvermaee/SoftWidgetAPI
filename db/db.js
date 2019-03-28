const config = require("../config/config")

const mongoose = require("mongoose"),
  blueBird = require("bluebird");

switch (config.env) {
  case "test":
    mongooseConnectTest(config.mongoUrlTest);
    break;
  default:
    mongooseConnectProdOrDev(config.mongoUrl);
    break;
}

async function mongooseConnectProdOrDev(dbUrl) {
  try {
    const authData = {
      user: config.mongoUser,
      pass: config.mongoPassword,
      dbName: config.mongoDatabase,
      useNewUrlParser: true,
      useCreateIndex: true
    };

    const client = await mongoose.connect(dbUrl, authData);

    if (client) console.log("Connected to Mongo...");
  } catch (err) {
    console.log(err);
  }
}

async function mongooseConnectTest(dbUrl) {
  try {
    const authData = {
      user: config.mongoUserTest,
      pass: config.mongoPasswordTest,
      dbName: config.mongoDatabaseTest,
      useNewUrlParser: true,
      useCreateIndex: true
    };

    const client = await mongoose.connect(dbUrl, authData);

    if (client) console.log("Connected to Mongo...");
  } catch (err) {
    console.log(err);
  }
}

exports.mongoose = mongoose;
