const { Router } = require('express');

const apiV1Router = require('./v1');
const apiV2Router = require('./v2');

const apiRouter = Router();

apiRouter.use('/v1', apiV1Router);
apiRouter.use('/v2', apiV2Router);

module.exports = apiRouter;