const userService = require('../services/user')

//class
const getAllClass = async (req, res) => {
    const { data, metadata } = await userService.getAllClass()
    res.send({
        status: 1,
        metadata,
        data
    })
}
const deleteClass = async (req, res) => {
    const { id } = req.params
    await userService.deleteClass(id)
    res.send({
        status: 1,
    })
}
const createClass = async (req, res) => {
    await userService.createClass(req.body)
    res.send({
        status: 1
    })
}
//student
const getStudentInClass = async (req, res) => {
    const idClass = req.params.id;
    const { data, metadata } = await userService.getStudentInClass(idClass)
    res.send({
        status: 1,
        metadata,
        data
    })
}
const deleteStudent = async (req, res) => {
    const { id } = req.params
    await userService.deleteStudent(id)
    res.send({
        status: 1,
    })
}
const getStudent = async (req, res) => {
    const idStudent = req.params.id;
    const { data } = await userService.getStudent(idStudent)
    res.send({
        status: 1,
        data
    })
}
module.exports = {
    getAllClass,
    getStudentInClass,
    getStudent,
    deleteClass,
    deleteStudent,
    createClass
}