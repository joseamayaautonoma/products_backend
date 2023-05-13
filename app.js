const express = require('express');
const app = express();

const productsRoutes = require('./routes/products.routes');

require('./config/db');

app.use(express.json());

app.use('/products', productsRoutes);

app.listen(3500, () => {
    console.log('Listening on port: ' + 3500);
})