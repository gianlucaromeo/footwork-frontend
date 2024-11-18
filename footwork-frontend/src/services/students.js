import helper from './helper'
import currentUserService from './currentUser'

const login = async (email, password) => {
    return helper.doPost(
        helper.loginStudentEndpoint,
        { email, password }
    ).then(data => {
        currentUserService.clearUser()
        currentUserService.setToken(data.token)
        return data
    }).catch(error => {
        console.error(error)
        return null
    })
}

const create = (
    firstName,
    lastName,
    email,
    password,
    courseIds,
) => {
    return helper.doPost(helper.createStudentEndpoint, {
        firstName,
        lastName,
        email,
        password,
        courseIds,
    })
}

export default {
    login,
    create,
}