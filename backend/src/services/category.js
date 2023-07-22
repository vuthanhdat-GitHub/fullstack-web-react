const db = require('../utils/db')
const getAllcategory = async ({ limit, offset }) => {
    const sql = `select  display, description, imageUrl, categoryId
    from category
    where isDelete = 0
    limit ?
    offset ?`
    const data = await db.queryMulti(sql, [limit, offset])
    const countsql = `
    select count(categoryId) as total from category`
    const { total } = await db.queryOne(countsql)
    return {
        data,
        metadata: {
            length: data.length,
            total
        }
    }
}
const getCategorybyId = async (id) => {
    const sql = `select display, description, imageUrl 
    from category 
    where categoryId = ? and isDelete = 0
    limit 1;`
    const data = await db.queryOne(sql, [id])
    return { data }
}
const creatCategory = async ({ display, description, imageUrl }) => {
    const sql = `
    insert into category (categoryId,display,description,imageUrl)
    values(uuid(),?,?,?);`
    const data = await db.query(sql, [display, description, imageUrl])
    return data
}
const updateCategorybyId = async ({ display, description, imageUrl }) => {
    const sql = `update category 
    set display = ?,
    description = ?,
    imageUrl = ?
    where categoryId = ? and isDelete = 0`
    await db.query(sql, [display, description, imageUrl])

}
const deleteCategorybyId = async (id) => {
    const sql = `update category
    set isDelete =1
    where categoryId = ?`
    await db.query(sql, [id])
}
const parameterCategory = async () => {
    const sql = `
    select categoryId,display
    from category
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
    getAllcategory,
    getCategorybyId,
    creatCategory,
    updateCategorybyId,
    deleteCategorybyId,
    parameterCategory
}





