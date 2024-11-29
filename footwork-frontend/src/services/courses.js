import helper from './helper.js'
import currentUser from './currentUser.js'

const getAll = async () => {
    return helper.doGet(helper.getAllCoursesEndpoint)
}

const getEnrolledCourses = async () => {
    const token = currentUser.getToken()
    return helper.doGet(helper.getEnrolledCoursesEndpoint, {
        headers: {
            Authorization: token,
        }
    })
}

const createCourse = async (fileName, folderName, coverImage) => {
    const token = currentUser.getToken();

    const formData = new FormData();
    formData.append('name', fileName)
    formData.append('folder', folderName)
    formData.append('coverImage', coverImage)

    return helper.doPost(helper.createCourseEndpoint, formData, {
        headers: {
            Authorization: token,
            'Content-Type': 'multipart/form-data', // Important for file upload
        },
    })
}

const updateCourse = async (courseId, fileName, folderName, coverImage) => {
    const token = currentUser.getToken();

    const formData = new FormData();
    formData.append('name', fileName)
    formData.append('folder', folderName)
    formData.append('coverImage', coverImage)

    return helper.doPut(`${helper.updateCourseEndpoint}/${courseId}`, formData, {
        headers: {
            Authorization: token,
            'Content-Type': 'multipart/form-data', // Important for file upload
        },
    })
}

const deleteCourse = async (courseId) => {
    return helper.doDelete(
        `${helper.deleteCourseEndpoint}${courseId}`,
        {},
        {
            headers: {
                Authorization: currentUser.getToken(),
            }
        }
    )
}


export default {
    getAll,
    getEnrolledCourses,
    createCourse,
    updateCourse,
    deleteCourse,
}