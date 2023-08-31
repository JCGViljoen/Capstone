// orders
const db = require("../config");
const { hash, compare, hashSync } = require("bcrypt");

class Orders {
    fetchOrders(req, res) {
        const query = `SELECT order_id, user_id, order_date, status, total_amount, shipping_address, billing_address 
        FROM Orders;
        `;
        db.query(query, (err, results)=> {
            if (err) {
                return res.status(500).json({
                    status: res.statusCode,
                    error: "An error occurred while getting orders."
                });
            }
            res.json({
                status: res.statusCode,
                results
            });

        });
    }
    fetchOrder(req, res) {
        const query = `
        SELECT order_id, user_id, order_date, status, total_amount, shipping_address, billing_address 
        FROM Orders 
        WHERE order_id = ${req.params.id};
        `;
        db.query(query, (err, results)=> {
            if (err) {
                return res.status(500).json({
                    status: res.statusCode,
                    error: "An error occurred while getting this order."
                });
            }
            res.json({
                status: res.statusCode,
                results
            });

        });
    }

    createOrder(req, res) {
        const {
            user_id,
            order_date,
            status,
            total_amount,
            shipping_address,
            billing_address
        } = req.body;

        const query = `
        INSERT INTO Orders (user_id, order_date, status, total_amount, shipping_address, billing_address)
        VALUES (?, ?, ?, ?, ?, ?);
        `;

        const values = [
            user_id,
            order_date,
            status,
            total_amount,
            shipping_address,
            billing_address
        ];

        db.query(query, values, (err, results) => {
            if (err) {
                return res.status(500).json({
                    status: res.statusCode,
                    error: "An error occurred while creating the order."
                });
            }
            res.json({
                status: res.statusCode,
                message: "Order created successfully.",
                orderId: results.insertId
            });
        });
    }

    updateOrder(req, res) {
        const orderId = req.params.id;
        const {
            user_id,
            order_date,
            status,
            total_amount,
            shipping_address,
            billing_address
        } = req.body;

        const query = `
        UPDATE Orders
        SET user_id = ?, order_date = ?, status = ?, total_amount = ?, shipping_address = ?, billing_address = ?
        WHERE order_id = ?;
        `;

        const values = [
            user_id,
            order_date,
            status,
            total_amount,
            shipping_address,
            billing_address,
            orderId
        ];

        db.query(query, values, (err, results) => {
            if (err) {
                return res.status(500).json({
                    status: res.statusCode,
                    error: "An error occurred while updating the order."
                });
            }
            res.json({
                status: res.statusCode,
                message: "Order updated successfully."
            });
        });
    }

    deleteOrder(req, res) {
        const orderId = req.params.id;

        const query = `
        DELETE FROM Orders
        WHERE order_id = ?;
        `;

        db.query(query, [orderId], (err, results) => {
            if (err) {
                return res.status(500).json({
                    status: res.statusCode,
                    error: "An error occurred while deleting the order."
                });
            }
            res.json({
                status: res.statusCode,
                message: "Order deleted successfully."
            });
        });
    }
}

module.exports = Orders;




