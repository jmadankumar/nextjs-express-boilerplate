const { Router } = require('express');
const logger = require('../../lib/logger');

const router = Router();

router.post('/', (req, res) => {
    logger.info(req.body);
    res.send({
        data: req.body,
        version: 'V1'
    });
});

router.get('/', (req, res) => {
    logger.info(req.query.id);
    res.send({
        data: req.query.id,
        version: 'V1'
    });
});

module.exports = router


