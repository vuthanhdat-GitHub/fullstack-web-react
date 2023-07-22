
const mysql = require('mysql')

const config = {
    host:'localhost',
    port:3306,
    user:'root',
    password:'Ttha527218',
    database:'blabla'
}


// mysql.createConnection(config)   -- mo ra 1 cong connect
const pool = mysql.createPool(config)

module.exports = pool;
