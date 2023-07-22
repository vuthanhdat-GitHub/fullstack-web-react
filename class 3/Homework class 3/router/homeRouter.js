const Router = require('express').Router();

Router.get("/", (req, res) => {
    res.send(`<h1>Enter link "/user" to look for user data</h1>
        <h1>Enter link "/category" to look for category data</h1>
        <h1>Enter link "/product" to look for product data</h1>
        <h1>Enter link "/order" to look for order data</h1>`
    )
})

module.exports = Router;
