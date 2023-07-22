const accountService = require('../services/account')

const getAllAccount = async (req, res) => {
    const { data, metadata } = await accountService.getAllAccount(req.pagination)
    res.send({
        status: 1,
        metadata,
        data
    })
}
const getAccountbyId = async (req, res) => {
    const { id } = req.params;
    const { data } = await accountService.getAccountbyId(id)
    res.send({
        status: 1,
        data
    })
}
const creatAccount = async (req, res) => {
    await accountService.creatAccount(req.body)
    res.send({
        status: 1
    })
}
const updateAccount = async (req, res) => {
    const { id } = req.params;
    await accountService.updateAccountbyId(id, req.body)
    res.send({
        status: 1,
    })
}
const deleteAccount = async (req, res) => {
    const { id } = req.params
    await accountService.deleteAccountbyId(id)
    res.send({
        status:1,
    })

}
module.exports = {
    getAllAccount,
    getAccountbyId,
    creatAccount,
    updateAccount,
    deleteAccount,
}