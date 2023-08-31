const Users = require("./users");
const Products = require("./products");
const Orders = require("./orders")

module.exports = {
    users: new Users(),
    products: new Products(),
    orders: new Orders()
};