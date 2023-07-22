const pool = require('../utils/db');

const Router = require('express').Router();

Router.get('/', (req, res) => {
    pool.query('select * from `user`', (err, data) => {
        if (err) res.send(data)
        res.send(data)
    })
})
module.exports = Router;