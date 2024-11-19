import helper from './helper'
import currentUserService from './currentUser'
import courses from './courses'

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

export default {
    login,
    create,
}