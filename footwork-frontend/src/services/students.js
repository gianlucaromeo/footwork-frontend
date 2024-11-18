import helper from './helper'

const login = (email, password) => {
    return helper.doPost(helper.loginStudentEndpoint, { email, password })
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