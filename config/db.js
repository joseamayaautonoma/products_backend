const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'db_products'
});

connection.connect((err) => {
    if ( err ) {
        console.log( err );
        return
    }

    console.log('connected to db');
});


module.exports = connection;