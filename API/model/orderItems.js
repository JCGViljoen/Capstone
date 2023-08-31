const db = require("../config");

class OrderItems {
    fetchOrderItems(req, res) {
        const query = `
        SELECT order_item_id, order_id, product_id, quantity, price
        FROM order_items;
        `;
        db.query(query, (err, results) => {
            if (err) {
                return res.status(500).json({
                    status: res.statusCode,
                    error: "An error occurred while fetching order items."
                });
            }
            res.json({
                status: res.statusCode,
                results
            });
        });
    }

    fetchOrderItem(req, res) {
        const query = `
        SELECT order_item_id, order_id, product_id, quantity, price
        FROM order_items
        WHERE order_item_id = ${req.params.id};
        `;
        db.query(query, (err, results) => {
            if (err) {
                return res.status(500).json({
                    status: res.statusCode,
                    error: "An error occurred while fetching this order item."
                });
            }
            res.json({
                status: res.statusCode,
                results
            });
        });
    }

    createOrderItem(req, res) {
        const { order_id, product_id, quantity, price } = req.body;

        const query = `
        INSERT INTO order_items (order_id, product_id, quantity, price)
        VALUES (?, ?, ?, ?);
        `;

        const values = [order_id, product_id, quantity, price];

        db.query(query, values, (err, results) => {
            if (err) {
                return res.status(500).json({
                    status: res.statusCode,
                    error: "An error occurred while creating the order item."
                });
            }
            res.json({
                status: res.statusCode,
                message: "Order item created successfully.",
                orderItemId: results.insertId
            });
        });
    }

    updateOrderItem(req, res) {
        const orderItemId = req.params.id;
        const { order_id, product_id, quantity, price } = req.body;

        const query = `
        UPDATE order_items
        SET order_id = ?, product_id = ?, quantity = ?, price = ?
        WHERE order_item_id = ?;
        `;

        const values = [order_id, product_id, quantity, price, orderItemId];

        db.query(query, values, (err, results) => {
            if (err) {
                return res.status(500).json({
                    status: res.statusCode,
                    error: "An error occurred while updating the order item."
                });
            }
            res.json({
                status: res.statusCode,
                message: "Order item updated successfully."
            });
        });
    }

    deleteOrderItem(req, res) {
        const orderItemId = req.params.id;

        const query = `
        DELETE FROM order_items
        WHERE order_item_id = ?;
        `;

        db.query(query, [orderItemId], (err, results) => {
            if (err) {
                return res.status(500).json({
                    status: res.statusCode,
                    error: "An error occurred while deleting the order item."
                });
            }
            res.json({
                status: res.statusCode,
                message: "Order item deleted successfully."
            });
        });
    }
}
module.exports = OrderItems;

