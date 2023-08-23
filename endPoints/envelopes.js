const envelopesRouter = require('express').Router();

// {
//     name: 'test1',
//     value: 4,
//     category: 'food'
// }

module.exports = envelopesRouter;

const {
    addEnvToDatabase,
    getAllFromEnvelopes
} = require('../db');

envelopesRouter.post('/:name/:category/:value', (req, res, next) => {
    const newEnvelope = addEnvToDatabase({
        name: req.params.name,
        value: req.params.value,
        category: req.params.category,
    });
    res.status(201).send(newEnvelope);
});

envelopesRouter.get('/', (req, res, next) => {
    res.send(getAllFromEnvelopes());
});