const express = require('express');
const app = express();
require('./config/db');
const productsRoutes = require('./routes/products.routes');

app.use(express.json());

app.use('/products', productsRoutes);

app.listen(3500, () => {
    console.log('Listening on port: ' + 3500);
})