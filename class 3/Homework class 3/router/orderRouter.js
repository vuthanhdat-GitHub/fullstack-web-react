const pool = require('../utils/db');

const Router = require('express').Router();

Router.get('/', (req, res) => {
    pool.query('select * from `order`', (err, data) => {
        if (err) {console.log(err)}
        res.send(data)
    })
})
module.exports = Router;