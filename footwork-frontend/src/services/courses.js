import helper from './helper.js'
import currentUser from './currentUser.js'

const getAll = async () => {
    return helper.doGet(helper.getAllCoursesEndpoint)
}

const getEnrolledCourses = async () => {
    const token = currentUser.getToken()
    return helper.doGet(helper.getEnrolledCoursesEndpoint, {
        headers: {
            Authorization: token,
        }
    })
}


export default {
    getAll,
    getEnrolledCourses,
}