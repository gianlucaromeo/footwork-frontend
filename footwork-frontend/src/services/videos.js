import helper from './helper.js'
import currentUser from './currentUser.js'

const createVideo = async (
    title, 
    choreographyId, 
    video, 
    coverImage, 
    folder
) => {
    const token = currentUser.getToken();

    const formData = new FormData();
    formData.append('title', title)
    formData.append('choreographyId', choreographyId)
    formData.append('video', video)
    formData.append('coverImage', coverImage)
    formData.append('folder', folder)

    return helper.doPost(helper.createVideoEndpoint, formData, {
        headers: {
            Authorization: token,
            'Content-Type': 'multipart/form-data', // Important for file upload
        },
    })
}

const deleteVideo = async (videoId) => {
    return helper.doDelete(`${helper.deleteVideoEndpoint}${videoId}`, 
        {},
        {
            headers: {
                Authorization: currentUser.getToken(),
            }
        }
    )
}

export default {
    createVideo,
    deleteVideo,
}