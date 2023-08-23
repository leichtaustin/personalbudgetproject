const express = require('express');
const app = express();

module.exports = app;

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

app.get('/', (req, res, next) => {
    res.send('Hello World');
})