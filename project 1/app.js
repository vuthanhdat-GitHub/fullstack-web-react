const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const cors = require('cors')
const path = require('path')
const bodyParser = require('body-parser')
const rfs = require('rotating-file-stream')
const morgan = require('morgan')

const app = express()

//middleware
app.use(bodyParser.json())
app.use(cors())
var accessLogStream = rfs.createStream('access.log', {
  interval: '1d', 
  path: path.join(__dirname, 'log')
})
app.use(morgan('combined', { stream: accessLogStream }))
app.use((req, res, next) => {
  console.log('------------------------------------------------------');
  console.log('req', req.method, req.originalUrl);
  console.log('body: ', req.body);
  console.log('params: ', req.params);
  console.log('query: ',req.query);
  next();
})

//router
const userRouter = require('./routers/user')

app.use('/api/v1/user',userRouter)


//listen
const PORT = process.env.API_PORT;
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`API running at ${PORT}`);
  }
})