const pool = require('../utils/db');

const Router = require('express').Router();

Router.get('/', (req, res) => {
    pool.query('select * from `category`', (err, data) => {
        if (err) {console.log(err)}
        res.send(data)
        // console.log(data)
    })
})
module.exports = Router;
