import helper from './helper.js'

const login = (email, password) => {
    return helper.doPost(helper.loginAdminEndpoint, { email, password })
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

export default {
    login,
    create,
}