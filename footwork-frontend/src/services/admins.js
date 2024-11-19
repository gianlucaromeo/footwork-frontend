import helper from './helper.js'
import currentUserService from './currentUser.js'

const login = async (email, password) => {
    return helper.doPost(
        helper.loginAdminEndpoint,
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