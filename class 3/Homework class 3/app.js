const express = require('express');
// const handlebars = require('express-handlebars')
// const bodyparser = require('body-parser')
const homeRouter = require('./router/homeRouter')
const userRouter = require('./router/userRouter')
const orderRouter = require('./router/orderRouter')
const productRouter = require('./router/productRouter');
const categoryRouter = require('./router/categoryRouter')

let app = express();

app.use('/', homeRouter)
app.use('/user', userRouter)
app.use('/product', productRouter)
app.use('/category', categoryRouter)
app.use('/order', orderRouter)



// app.engine("handlebars", handlebars({ defaultLayout: "defaultLayout" }))
// app.set("view engine", `handlebars`)
// app.use(bodyparser.urlencoded({ extended: false }))

// app.use(express.static("public"))


let port = 7000;

app.listen(port, err => {
    if (err) { console.log(err) } else {
        console.log(`App listen at ${port}`)
    }
})


//acbabcbacbab
//đâsdasas
