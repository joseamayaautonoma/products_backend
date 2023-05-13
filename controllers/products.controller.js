const db = require('../config/db');

const getProducts = ( req,res ) => {
    db.query('SELECT * FROM products', (err, result) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                message: 'Error en servidor',
                err
            });
        }

        return res.json({
            ok: true,
            products: result
        });
    });
}

const getProduct = (req, res) => {
    // const { id } = req.params;
    const { id } = req.params;

    db.query('SELECT * FROM products WHERE id = ?', [ id ], (err, result) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                message: 'Error en servidor',
                err
            });
        }

        return res.json({
            ok: true,
            product: result[0]
        })
    })
}

const createProduct = (req, res) => {
    const product = req.body;
    db.query('INSERT INTO products SET ? ', [product], (err, result) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                message: 'Error en servidor',
                err
            });
        }

        return res.status(201).json({
            ok: true,
            message: 'Product created successfully',
            product: result.insertId
        });
    })
}

const updateProduct = (req, res) => {
    const { id } = req.params;
    const product = req.body;
    db.query('UPDATE products SET ? WHERE id = ?', [product, id], (err, result) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                message: 'Error en servidor',
                err
            });
        }

        return res.json({
            ok: true,
            message: 'Product updated successfully'
        });
    })
}

const deleteProduct = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM products WHERE id = ?', [ id ], ( err, result) =>{
        if (err) {
            return res.status(500).json({
                ok: false,
                message: 'Error en servidor',
                err
            });
        }

        if (result.affectedRows < 1) {
            return res.status(404).json({
                ok: false,
                message: 'Product not found'
            })
        }

        return res.json({
            ok: true,
            message: 'Product deleted successfully'
        });
    })
}

module.exports = {
 getProducts,
 getProduct,
 createProduct,
 updateProduct,
 deleteProduct
}