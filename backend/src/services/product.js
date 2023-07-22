const db = require('../utils/db')
const getAllProduct = async ({ limit, offset }) => {
    const sql = `
    select productId, display, provider, description, imageUrl, priceIn, priceOut, priceSale, shipday, instock, status, categoryId, created_at, updated_at
    from product
    where isDelete = 0
    limit ?
    offset ?;
    `
    const data = await db.queryMulti(sql, [limit, offset])
    const countsql = `
    select count(productId) as total from product`
    const { total } = await db.queryOne(countsql)
    return {
        data,
        metadata: {
            length: data.length,
            total
        }
    }
}
const getProductbyID = async (id) => {
    const sql = `
    select productId,display,provider,description, imageUrl, priceIn, priceOut, priceSale, shipday, instock, status, categoryId, created_at, updated_at
    from product
    where isDelete = 0 and productId=?`
    const data = await db.queryOne(sql, [id])
    return {
        data
    }
}
const creatProduct = async ({ display, provider, description, imageUrl, priceIn, priceOut, priceSale, shipday, instock, status, categoryId }) => {
    const sql = `
    insert into product (productId,display,provider,description, imageUrl, priceIn, priceOut, priceSale, shipday, instock, status,categoryId)
    values(uuid(),?,?,?,?,?,?,?,?,?,?,?)`
    await db.query(sql, [display, provider, description, imageUrl, priceIn, priceOut, priceSale, shipday, instock, status, categoryId])

}
const updateProductbyID = async ({ display, provider, description, imageUrl, priceIn, priceOut, priceSale, shipday, instock, status, categoryId, productId }) => {
    const sql = `
update product
set display = ?,
 provider = ?, 
 description = ?, 
 imageUrl = ?, 
 priceIn = ?, 
 priceOut = ?, 
 priceSale = ?, 
 shipday = ?, 
 instock = ?, 
 status = ?, 
 categoryId = ? 
 where productId = ? and isDelete = 0`
    await db.query(sql, [display, provider, description, imageUrl, priceIn, priceOut, priceSale, shipday, instock, status, categoryId, productId])
}
const deleteProductbyID = async (id) => {
    const sql = `update product
    set isDelete =1
    where productId = ?`
    await db.query(sql, [id])
}
const parameterProduct = async () => {
    const sql = `
    select productId,display
    from product
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
    getAllProduct,
    getProductbyID,
    creatProduct,
    updateProductbyID,
    deleteProductbyID,
    parameterProduct
}