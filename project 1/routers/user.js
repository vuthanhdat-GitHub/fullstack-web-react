const R = require('express').Router();
const userController = require('../controller/user');

R.get('/',userController.getAllClass);
R.delete('/class/:id',userController.deleteClass)
R.get('/class/:id',userController.getStudentInClass);
R.post('/',userController.createClass)

R.get('/student/:id',userController.getStudent)
R.delete('/student/:id',userController.deleteStudent)

module.exports = R;