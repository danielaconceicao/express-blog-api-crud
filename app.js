const express = require('express');
const app = express();
const postsRouter = require('../express-blog-api-crud/router/posts');
const notFoundMiddleware = require('./middleware/notfound');
const handleMiddleware = require('./middleware/serverError');
app.use(express.json());

const HOST = 'http://localhost'
const PORT = 3001

app.listen(PORT, () => {
    console.log(`${HOST}:${PORT}`);
});

app.get('/', (req, res) => {
    res.send('My blog API')
});

app.use('/posts', postsRouter);

app.use(notFoundMiddleware);

app.use(handleMiddleware);
  