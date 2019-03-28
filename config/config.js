module.exports = {
    port: process.env.PORT || 5000,
    env: process.env.NODE_ENV || 'development',
    logger: process.env.LOGGER || true,
    mongoUrl: process.env.MONGO_URL || 'mongodb://root:$123456root@ds125526.mlab.com:25526/htm-softwidgetapi-dev',
    mongoUser: process.env.MONGO_USER || 'root',
    mongoPassword: process.env.MONGO_PWD || '$123456root',
    mongoDatabase: process.env.MONGO_DB || 'htm-softwidgetapi-dev',
    mongoUrlTest: process.env.MONGO_URL_TEST || 'mongodb://test:$123456test@ds125526.mlab.com:25526/htm-softwidgetapi-test',
    mongoUserTest: process.env.MONGO_USER_TEST || 'test',
    mongoPasswordTest: process.env.MONGO_PWD_TEST || '$123456test',
    mongoDatabaseTest: process.env.MONGO_DB_TEST || 'htm-softwidgetapi-test'
}