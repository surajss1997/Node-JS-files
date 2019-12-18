const express = require('express');
const app = express();

const router = require('./router/appRouting');

const hostname = '127.0.0.1';
const port = 3000;

// use static files path
app.use('/public',express.static('public'));

// Routing Logic
router.mapRoutes(app);

app.listen(port,hostname, () => {
    console.log(`Server is started at : http://${hostname}:${port}`);
});