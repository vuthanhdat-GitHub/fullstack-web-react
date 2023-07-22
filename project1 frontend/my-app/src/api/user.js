import api from '../api/api'

//class
export const getAllClass = async () => {
    try {
        const res = await api.get('/user')
        return {
            status: 1,
            data: res.data.data
        }
    } catch (err) {
        return {
            message: 'err',
            status: 0,
        }
    }
}
export const deleteClass = async (id) => {
    try {
        await api.delete(`user/class/${id}`)
        return {
            status: 1,

        }
    } catch (error) {
        return {
            message: error,
            status: 0,
        }
    }
}
export const addClass = async (body) => {
    try {
        const req = await api.post(`/user`,
            body
        )
        return {
            status: 1,
            userdata: req.data.data
        }
    } catch (error) {
        return {
            message: error,
            status: 0,
        }
    }
}

//student
export const getStudentByID = async (id) => {
    try {
        const res = await api.get(`/user/class/${id}`)
        return {
            status: 1,
            data: res.data
        }
    } catch (err) {
        return {
            message: 'err',
            status: 0,
        }
    }
}
export const deleteStudent = async (id) => {
    try {
        await api.delete(`user/student/${id}`)
        return {
            status: 1,
        }
    } catch (error) {
        return {
            message: error,
            status: 0,
        }
    }
}
export const getStudent = async (id) => {
    try {
        const res = await api.get(`/user/student/${id}`)
        return {
            status: 1,
            data: res.data
        }
    } catch (err) {
        return {
            message: 'err',
            status: 0,
        }
    }
}