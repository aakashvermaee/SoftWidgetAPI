'use strict';

const config = require("./config/config")

// dot-env
if (config.env !== "production")
  require("dotenv").config();

// deps
const bodyParser = require("body-parser");

const PORT = config.port,
  LOGGER = config.logger;

const fastify = require("fastify")({
  logger: LOGGER
});

fastify.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST, DELETE");
  
  next();
})

fastify.use(bodyParser.urlencoded({
  extended: false
}));

fastify.get("/", (req, res) => res.send("Hello World!"));

// routes
const { apiRoutes } = require("./routes/routes");
for (let apiRoute of apiRoutes) {
  for (let route of apiRoute) {
    fastify.route(route);
  }
}

fastify.listen(PORT, "0.0.0.0", err => {
  if (err) throw err;

  console.log(`SoftWidgetApi Server running on port: ${PORT}`);
});

module.exports = fastify