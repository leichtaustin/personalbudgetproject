const envelopesRouter = require('express').Router();

// {
//     name: 'test1',
//     value: 4,
//     category: 'food'
// }

module.exports = envelopesRouter;

const {
    addEnvToDatabase,
    getAllFromEnvelopes,
    getEnvelopeById,
} = require('../db');

envelopesRouter.param('envelopeId', (req, res, next, id) => {
    const envelope = getEnvelopeById(id);
    if(envelope) {
        req.envelope = envelope;
        next();
    } else {
        res.status(404).send();
    }
})

envelopesRouter.post('/:name/:category/:value', (req, res, next) => {
    console.log(req.params);
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

envelopesRouter.get('/:id', (req, res, next) => {
    console.log(req.envelope);
    res.send(req.envelope);
})