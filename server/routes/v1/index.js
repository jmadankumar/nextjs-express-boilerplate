const { Router } = require('express');
const testRouter = require('./test');

const apiV1Router = Router();

apiV1Router.use('/test', testRouter);

module.exports = apiV1Router;