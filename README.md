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
Contains seed file to pre-populate the database
These can be run by running `./node_modules/.bin/md-seed run --dropdb`
For test `NODE_ENV=test ./node_modules/.bin/md-seed run --dropdb`