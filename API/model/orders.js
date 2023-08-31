// orders
const db = require("../config");
const { hash, compare, hashSync } = require("bcrypt");

class Orders {
    fetchUsers(req, res) {
        const query = `SELECT order_id, user_id, order_date, status, total_amount, shipping_address, billing_address 
        FROM Orders;
        `;
        db,query(query, (err, results)=> {
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
        db,query(query, (err, results)=> {
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
} 



