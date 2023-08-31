const express = require("express");
const bodyParser = require("body-parser");
const routes = express.Router();


const { products, users, orders, orderItems } = require("../model");

// Products routes
// CREATE
routes.post("/product", bodyParser.json(), (req, res) => {
    products.registerProduct(req, res);
});

// READ 
routes.get("/products", (req, res) => {
    products.fetchProducts(req, res);
});
routes.get("/product/:id", (req, res) => {
    products.fetchProduct(req, res);
});

// UPDATE
routes.patch("/product/:id", bodyParser.json(), (req, res) => {
    products.updateProduct(req, res);
});

// DELETE
routes.delete("/product/:id", bodyParser.json(), (req, res) => {
    products.deleteProduct(req, res);
});

// User routes
// READ
routes.get("/users", (req, res) => {
    users.fetchUsers(req, res);
});
routes.get("/user/:id", (req, res) => { 
    users.fetchUser(req, res);
});

// CREATE
routes.post("/register", bodyParser.json(), (req, res) => {
    users.register(req, res);
});

// UPDATE
routes.patch("/user/:id", bodyParser.json(), (req, res) => {
    users.updateUser(req, res);
});

// DELETE
routes.delete("/user/:id", bodyParser.json(), (req, res) => {
    users.deleteUser(req, res);
});

// LOGIN
routes.post("/login", bodyParser.json(), (req, res) => {
    users.login(req, res);
});


// Orders routes
// CREATE
routes.post('/order', bodyParser.json(), (req, res) => {
    orders.createOrder(req, res);
});

// READ
routes.get('/orders', (req, res) => {
    orders.fetchOrders(req, res);
});

routes.get('/order/:id', (req, res) => {
    orders.fetchOrder(req, res);
});

// UPDATE
routes.patch('/order/:id', bodyParser.json(), (req, res) => {
    orders.updateOrder(req, res);
});

// DELETE
routes.delete('/order/:id', (req, res) => {
    orders.deleteOrder(req, res);
});

// OrderItems routes
// CREATE
routes.post('/orderItem', bodyParser.json(), (req, res) => {
    orders.createOrder(req, res);
});

// READ
routes.get('/orderItems', (req, res) => {
    orders.fetchOrders(req, res);
});

routes.get('/orderItem/:id', (req, res) => {
    orders.fetchOrder(req, res);
});

// UPDATE
routes.patch('/orderItem/:id', bodyParser.json(), (req, res) => {
    orders.updateOrder(req, res);
});

// DELETE
routes.delete('/orderItem/:id', (req, res) => {
    orders.deleteOrder(req, res);
});



module.exports = {
    express,
    routes
};
