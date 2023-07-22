const  Route = require('express').Router();
const accountController = require('../controller/account')

Route.get('/', accountController.getAllproduct)
Route.get('/:id', accountController.getProductbyId)
Route.post('/', accountController.creatProduct)
Route.put('/:id', accountController.updateProduct)
Route.delete('/:id', accountController.deleteProduct)

module.exports = Route