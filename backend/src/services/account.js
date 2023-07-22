const db = require('../utils/db')
const getAllAccount = async ({ limit, offset }) => {
    const sql = `
    select username, password, role, display, email, phone, address, birthday, avatar, status , created_at, updated_at
    from account
    where isDelete = 0
    limit ?
    offset ?;
    `
    const data = await db.queryMulti(sql, [limit, offset])
    const countsql = `
    select count(username) as total from account`
    const { total } = await db.queryOne(countsql)
    return {
        data,
        meta: {
            length: data.length,
            total
        }
    }
}
const getAccountbyId = async (id) => {
    const sql = `
    select username, password, role, display, email, phone, address, birthday, avatar, status, created_at, updated_at 
    from account
    where isDelete = 0 and username = ?`
    const data = await db.queryOne(sql, [id])

}
const creatAccount = async ({ username, password, role, display, email, phone, address, birthday, avatar, status }) => {
    const sql = `
    insert into account (username, password, role, display, email, phone, address, birthday, avatar, status )
    values(?,?,?,?,?,?,?,?,?,?)`
    await db.query(sql,[username, password, role, display, email, phone, address, birthday, avatar, status])
}
const updateAccountbyId = async ({password, role, display, email, phone, address, birthday, avatar, status, username }) => {
    const sql = `
    update account 
    set password = ?, 
    role =?, 
    display=?, 
    email=?, 
    phone=?, 
    address=?, 
    birthday=?, 
    avatar=?, 
    status=?
    where username = ? and isDelete = 0;
    `
    await db.query(sql,[password, role, display, email, phone, address, birthday, avatar, status, username])
}
const deleteAccountbyId = async (id) => {
    const sql = `update account
    set isDelete =1
    where username = ?`
    await db.query(sql, [id])
}
const parameterAccount = async () => {
    const sql = `
    select username
    from account
    where isDelete=0`
    const data = await db.queryMulti(sql);
    return {
        data,
        metadata: {
            length: data.length
        }
    }
}
module.exports = {
    deleteAccountbyId,
    updateAccountbyId,
    creatAccount,
    getAccountbyId,
    getAllAccount,
    parameterAccount
}