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

const getProfile = async () => {
    return helper.doGet(helper.profileEndpoint, {
        headers: {
            Authorization: currentUserService.getToken(),
        }
    })
}

const deleteOwnAccount = async () => {
    return helper.doDelete(helper.deleteStudentAccountEndpoint, {}, {
        headers: {
            Authorization: currentUserService.getToken(),
        }
    })
}

export default {
    login,
    create,
    getAllVideos,
    getProfile,
    deleteOwnAccount,
}