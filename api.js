const express = require('express');
const apiRouter = express.Router();

const envelopesRouter = require('./endPoints/envelopes');

apiRouter.use('/envelopes', envelopesRouter);

apiRouter.get('/', (req, res, next) => {
    res.send('Hello World');
})

module.exports = apiRouter;