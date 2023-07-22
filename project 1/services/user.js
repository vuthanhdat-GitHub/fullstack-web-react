const db = require('../utils/db')

//class
const getAllClass = async () => {
    const sql = `
    select * from class
    where isDelete=0;
    `
    const data = await db.queryMulti(sql)
    const countsql = `
    select count(idClass) as total from class
    
    `
    const { total } = await db.queryOne(countsql)
    return {
        data,
        metadata: {
            length: data.length,
            total
        }
    }
}
const deleteClass = async (id) => {
    const sql = `
        update class
        set isDelete = 1
        where idClass = ?
    `
    await db.query(sql, [id])
}
const createClass = async ({className})=>{
    const sql=`
    insert into class (idClass,className)
    values(uuid(),?)`
    await db.query(sql,[className])
}


//student
const getStudentInClass = async (idClass) => {
    const sql = `
    select fullName,idStudent, idClass
    from student
    where isDelete = 0 and idClass=?;
    `
    const data = await db.queryMulti(sql, idClass)
    const countsql = `
    select count(idStudent) as total from student
   
    `
    const { total } = await db.queryOne(countsql)
    
    return {
        data,
        metadata: {
            length: data.length,
            total
        }
    }
}
const deleteStudent = async (id) => {
    const sql = `update student
    set isDelete = 1
    where idStudent = ?`
    await db.query(sql, [id])
}
const getStudent = async (idStudent) => {
    const sql = `
    select *
    from student
    where isDelete = 0 and idStudent = ?; 
    `
    const data = await db.queryOne(sql, idStudent)
    return {
        data
    }
}

module.exports = {
    getAllClass,
    getStudentInClass,
    getStudent,
    deleteClass,
    deleteStudent,
    createClass
}