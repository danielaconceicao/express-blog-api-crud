const express = require('express');
const app = express();
const bikeRouter = require('./router/bikesRouter');

const HOST = 'http://localhost'
const PORT = 3002

app.listen(PORT, () => {
    console.log(`${HOST}:${PORT}`);
});

app.use('/bikes', bikeRouter);