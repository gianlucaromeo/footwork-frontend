import helper from './helper.js'
import currentUser from './currentUser.js'

const getAllEnrollments = async () => {
    return helper.doGet(helper.getAllEnrollmentsEndpoint, {
        headers: {
            Authorization: currentUser.getToken(),
        }
    })
}

export default {
    getAllEnrollments,
}