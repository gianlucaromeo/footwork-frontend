import helper from './helper.js'

const getAll = async () => {
    return helper.doGet(helper.getAllCoursesEndpoint)
}

export default {
    getAll,
}