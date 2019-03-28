# SoftWidgetAPI
Microservice which provides CRUD ability on orders related to SoftWidget.

## Installing and starting the api
- `npm install`
- `npm start`

## Configuring the api
You can add or modify the configuration in `config/config.js` or can reference environment variables from a .env file in this location.

## /test
Contains various test suites of the API.
These can be run by running `npm run test`.

## /seed
Contains seed file to pre-populate the database.
These can be run by running `./node_modules/.bin/md-seed run --dropdb`
For test `NODE_ENV=test ./node_modules/.bin/md-seed run --dropdb`

## Postman collection
Here is the [link](https://documenter.getpostman.com/view/6127832/S17utSUW#8bc85377-1282-45bb-80d7-ac6ac68cc8e3) to see the APIs in postman collection
