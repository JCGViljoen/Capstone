const db = require('../config');

class Products {
    fetchProducts(req, res) {
        const query = `
            SELECT product_id, prodName, prodDesc, price, stock_quantity, product_image_url FROM Products;
        `;

        db.query(query, (err, results) => {
            if (err) {
                return res.status(500).json({
                    status: res.statusCode,
                    error: "An error occurred while fetching products.",
                });
            }
            res.json({
                status: res.statusCode,
                results,
            });
        });
    }

    fetchProduct(req, res) {
        const query = `
            SELECT product_id, prodName, prodDesc, price, stock_quantity, product_image_url
            FROM Products WHERE product_id = ?;
        `;
        db.query(query, [req.params.id], (err, result) => {
            if (err) {
                return res.status(500).json({
                    status: res.statusCode,
                    error: "An error occurred while fetching the product.",
                });
            }
            res.json({
                status: res.statusCode,
                result,
            });
        });
    }

    updateProduct(req, res) {
        const query = `
            UPDATE Products
            SET ?
            WHERE product_id = ?`;
        db.query(query, [req.body, req.params.id], (err) => {
            if (err) {
                return res.status(500).json({
                    status: res.statusCode,
                    error: "An error occurred while updating the product.",
                });
            }
            res.json({
                status: res.statusCode,
                msg: "The product has been updated",
            });
        });
    }

    deleteProduct(req, res) {
        const query = `
            DELETE FROM Products
            WHERE product_id = ?;
        `;
        db.query(query, [req.params.id], (err) => {
            if (err) {
                return res.status(500).json({
                    status: res.statusCode,
                    error: "An error occurred while deleting the product.",
                });
            }
            res.json({
                status: res.statusCode,
                msg: "The product has been deleted",
            });
        });
    }

    registerProduct(req, res) {
        const data = req.body;
        // Query
        const query = `
            INSERT INTO Products
            SET ?;
        `;
        db.query(query, [data], (err) => {
            if (err) {
                return res.status(500).json({
                    status: res.statusCode,
                    error: "An error occurred while adding the product.",
                });
            }
            res.json({
                status: res.statusCode,
                msg: "Product has been added.",
            });
        });
    }
}

module.exports = Products;
