import helper from './helper.js'
import currentUser from './currentUser.js'

const getAllEnrollments = async () => {
    return helper.doGet(helper.getAllEnrollmentsEndpoint, {
        headers: {
            Authorization: currentUser.getToken(),
        }
    })
}

const createEnrollment = async (courseId, studentId) => {
    return helper.doPost(helper.createEnrollmentEndpoint, {
        courseId,
        studentId,
    }, {
        headers: {
            Authorization: currentUser.getToken(),
        }
    })
}

const deleteEnrollment = async (courseId, studentId) => {
    return helper.doDelete(helper.deleteEnrollmentEndpoint, {
        courseId,
        studentId,
    }, {
        headers: {
            Authorization: currentUser.getToken(),
        }
    })
}

export default {
    getAllEnrollments,
    createEnrollment,
    deleteEnrollment,
}