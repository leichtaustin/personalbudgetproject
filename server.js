const express = require('express');
const app = express();

module.exports = app;

const envelope = {
    uniqId: 1,
    spendCategory: 'food',
    value: 45,
}

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

const apiRouter = require('./api');
app.use('/api', apiRouter);

app.get('/', (req, res, next) => {
    res.send(envelope);
})