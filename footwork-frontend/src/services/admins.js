import helper from './helper.js'
import currentUserService from './currentUser.js'

const login = async (email, password) => {
    return helper.doPost(
        helper.loginAdminEndpoint,
        { email, password }
    )
}

const create = (
    firstName,
    lastName,
    email,
    password,
) => {
    return helper.doPost(helper.createAdminEndpoint, {
        firstName,
        lastName,
        email,
        password,
    })
}

const getAllVideos = async () => {
    return helper.doGet(helper.getAdminVideosEndpoint, {
        headers: {
            Authorization: currentUserService.getToken(),
        }
    })
}

const getAllStudents = async () => {
    return helper.doGet(helper.getAllStudentsEndpoint, {
        headers: {
            Authorization: currentUserService.getToken(),
        }
    })
}

const getProfile = async () => {
    return helper.doGet(helper.adminProfileEndpoint, {
        headers: {
            Authorization: currentUserService.getToken(),
        }
    })
}

export default {
    login,
    create,
    getAllVideos,
    getAllStudents,
    getProfile,
}