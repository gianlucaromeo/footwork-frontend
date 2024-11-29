import helper from './helper.js'
import currentUser from './currentUser.js'

const getAll = async () => {
    return helper.doGet(
        helper.getChoreographiesEndpoint,
        {
            headers: {
                Authorization: currentUser.getToken(),
            }
        }
    )
}

const createChoreography = async (title, courseId, coverImage, folder) => {
    const token = currentUser.getToken();

    const formData = new FormData();
    formData.append('title', title)
    formData.append('courseId', courseId)
    formData.append('coverImage', coverImage)
    formData.append('folder', folder)

    return helper.doPost(helper.createChoreographyEndpoint, formData, {
        headers: {
            Authorization: token,
            'Content-Type': 'multipart/form-data', // Important for file upload
        },
    })
}

const updateChoreography = async (
    choreographyId, 
    title, 
    courseId, 
    coverImage, folder) => {

    const token = currentUser.getToken();

    const formData = new FormData();
    formData.append('title', title)
    formData.append('courseId', courseId)
    formData.append('coverImage', coverImage)
    formData.append('folder', folder)

    return helper.doPut(
        `${helper.updateChoreographyEndpoint}/${choreographyId}`, 
        formData, 
        {
            headers: {
                Authorization: token,
                'Content-Type': 'multipart/form-data', // Important for file upload
            },
        })
}

const deleteChoreography = async (choreographyId) => {
    return helper.doDelete(
        `${helper.deleteChoreographyEndpoint}${choreographyId}`, 
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
    createChoreography,
    updateChoreography,
    deleteChoreography,
}