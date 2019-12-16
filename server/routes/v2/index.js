const { Router } = require('express');
const testRouter = require('./test');

const apiV2Router = Router();

apiV2Router.use('/test', testRouter);

module.exports = apiV2Router;