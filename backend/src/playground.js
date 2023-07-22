require('dotenv').config()
const security = require('./utils/security')
console.log(process.env.SALT_ROUND);

const token = security.generateToken({
  username: 'hieu',
  role: -1
})
console.log(token);

const data = security.verifyToken(token)
console.log(data);

