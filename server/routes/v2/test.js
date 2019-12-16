const { Router } = require('express');

const router = Router();

router.post('/', (req, res) => {
    res.send({
        data: req.body,
        version: 'V2'
    });
});

router.get('/', (req, res) => {
    res.send({
        data: req.query.id,
        version: 'V2'
    });
});

module.exports = router


