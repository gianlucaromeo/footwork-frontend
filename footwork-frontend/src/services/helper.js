import axios from 'axios'

const baseUrl = import.meta.env.VITE_BASE_URL

const studentsEndpoint = `${baseUrl}/students`
const adminsEndpoint = `${baseUrl}/admins`
const loginEndpoint = `${baseUrl}/login`
const coursesEndpoint = `${baseUrl}/courses`
const enrollmentsEndpoint = `${baseUrl}/enrollments`
// const choreographiesEndpoint = `${baseUrl}/choreographies`
const videosEndpoint = `${baseUrl}/videos`

/* ADMIN */
const loginAdminEndpoint = `${loginEndpoint}/admin/`
const createAdminEndpoint = `${adminsEndpoint}/`

/* STUDENT */
const loginStudentEndpoint = `${loginEndpoint}/student/`
const createStudentEndpoint = `${studentsEndpoint}/`
const getAllStudentsEndpoint = `${studentsEndpoint}/`

/* COURSES */
const getAllCoursesEndpoint = `${coursesEndpoint}/all`
const getEnrolledCoursesEndpoint = `${coursesEndpoint}/student/all`

/* VIDEOS */
const getStudentVideosEndpoint = `${videosEndpoint}/student/all`
const getAdminVideosEndpoint = `${videosEndpoint}/admin/all`

/* ENROLLMENTS */
const getAllEnrollmentsEndpoint = `${enrollmentsEndpoint}/`

/* COMMON */
const doPost = async (url, data) => {
  return axios.post(url, data)
}

const doGet = async (url, config) => {
    return axios.get(url, config)
}
    

export default {
    /* ADMIN */
    loginAdminEndpoint,
    createAdminEndpoint,

    /* STUDENT */
    loginStudentEndpoint,
    createStudentEndpoint,
    getAllStudentsEndpoint,

    /* COURSES */
    getAllCoursesEndpoint,
    getEnrolledCoursesEndpoint,

    /* VIDEOS */
    getStudentVideosEndpoint,
    getAdminVideosEndpoint,

    /* ENROLLMENTS */
    getAllEnrollmentsEndpoint,

    /* COMMON */
    doPost,
    doGet,
}