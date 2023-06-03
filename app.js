const express = require('express');
const app = express();
const cors = require('cors');

require('./config/db');
const productsRoutes = require('./routes/products.routes');

app.use(express.json());
app.use( cors() );
app.use(express.static('uploads'))
// app.use('/files', express.static(path.join(__dirname, 'public')))

app.use('/products', productsRoutes);

app.listen(3500, () => {
    console.log('Listening on port: ' + 3500);
})