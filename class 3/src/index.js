
const express = require('express')
const dbUltils = require('./utils/db');
const pool = require('./utils/db');
const { getHeapCodeStatistics } = require('v8');
const { executionAsyncResource } = require('async_hooks');
const { resolve } = require('path');
const { rejects } = require('assert');

const app = express();

// app.listen(1000)

const callback = () => {
    console.log('Running at 7000')
}
app.listen(7000, callback)

app.get('/', (req, res) => {
    // const { query } = res
    // console.log(query)
    // const data = {
    //     username: 'hieu',
    //     password: 'hieupro'
    // }
    pool.query('select * from `category`;', (err, data) => {
        if (err) res.send(err)
        console.log(data)
        res.send(data)
    })
})

// const object1 = {
//     thuoctinh1: 'thuoc tinh so 1',
//     thuoctinh2: 'thuoc tinh so 2',
//     thuoctinh3: 'thuoc tinh so 3'
// }
// const tt1 = object1.thuoctinh1
// const { thuoctinh1, thuoctinh2 } = object1
// console.log(thuoctinh1)

// const getdata = async () => {

// }

// const fun1 = async () => {
//     const congviec1 = await getdata()
// }
// const getdata2 = (callback) => {
//     callback()
// }
// const executor = (resolve, reject) => {
//     resolve(10)
//     reject(20)
// }
// const prom = new Promise(executor)
// prom.then(
//     data => {
//         console.log(data)
//     }
// ).catch(
//     err => {
//         console.log(err)
//     }
// )

// const getData = (number) => {
//     return new Promise(resolve , reject)=> {
//     if (number == 0) {
//         resolve(10)
//     }
// }
// }
// getData(12)
// .then(
//     resolve =>{

//     }
// )
// const axios = require('axios');
// const { SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION } = require('constants');

// axios.get('localhost:7000').then(data => {
//     console.log(data)
// }).catch(err => {
//     console.log(err)
// })

const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

const ketquamap = array.map((value, index) => {
    console.log(value, 'indexing', index)
    return value * 100
})
console.log(ketquamap)

const ketquafilter = array.filter((value,index)=>{
    if (value <3) return true;
    else return false
})
console.log(ketquafilter)

//xem lai ham destructor



const user ={
    username:'hieu',
    tt1: 'haha',
    active: true

}
const user1={
    ...user,
    active: "dang hoat dong",
    tt1: "dmm"
}
console.log(user1)


const obj = {
    ttx1: 12,
    ttx2:14,
    ttx3:16
}
const fun7 = ({ttx1,ttx2,ttx3})=>{
    console.log(ttx1,ttx2,ttx3)
    
}
fun7(obj)