import helper from './helper'
import currentUserService from './currentUser'

const login = async (email, password) => {
    return helper.doPost(
        helper.loginStudentEndpoint,
        { email, password }
    )
}

const create = (
    firstName,
    lastName,
    email,
    password,
    courseIds,
) => {
    return helper.doPost(helper.createStudentEndpoint, {
        student: {
            firstName,
            lastName,
            email,
            password,
        },
        courses: courseIds,
    })
}

const getAllVideos = async () => {
    return helper.doGet(helper.getStudentVideosEndpoint, {
        headers: {
            Authorization: currentUserService.getToken(),
        }
    })
}

export default {
    login,
    create,
    getAllVideos,
}