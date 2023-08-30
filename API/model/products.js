// products model
const db = require('../config')

class Products{
    fetchProducts(req,res){
        const query = `
        SELECT product_id, prodName, prodDesc, price, stock_quantity, product_image_url FROM Products;
        `;

        db.query(query, (err, results)=> {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                    results,
            })
        })
    }

    fetchProduct(req, res) {
        const query = `
            SELECT product_id,prodName,prodDesc,price, stock_quantity, product_image_url
            from Products WHERE product_id = ${req.params.id};`;
        db.query(query, [req.params.id], (err, result) => {
          if (err)
            throw err.json({
              status: res.statusCode,
              result,
            });
        });
      }

      updateProduct(req, res) {
        const query = `
                UPDATE Products
                set ?
                where product_id =?`;
        db.query(query, [req.body, req.params.id], (err) => {
          if (err) throw err;
          res.json({
            staus: res.statusCode,
            msg: "The product has been updated",
          });
        });
      }
      deleteProduct(req, res) {
        const query = `
                delete from Products
                where product_id =${req.params.id};
                `;
        db.query(query, (err) => {
          if (err) throw err;
          res.json({
            status: res.statusCode,
            msg: "The product has been deleted",
          });
        });
      }
      registerProduct(req, res) {
        const data = req.body
        // Query
        const query = `
                INSERT INTO Products
                SET ?;
                `
        db.query(query, [data], (err) => {
          if (err) throw err;
          res.json({
            status: res.statusCode,
            msg: "Product has been added.",
          });
        });
      }
}

module.exports = Products;