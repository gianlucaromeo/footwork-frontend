import axios from 'axios'

const baseUrl = import.meta.env.VITE_BASE_URL

const studentsEndpoint = `${baseUrl}/students`
const adminsEndpoint = `${baseUrl}/admins`
const loginEndpoint = `${baseUrl}/login`
const coursesEndpoint = `${baseUrl}/courses`
const enrollmentsEndpoint = `${baseUrl}/enrollments`
const choreographiesEndpoint = `${baseUrl}/choreographies`
const videosEndpoint = `${baseUrl}/videos`

/* ADMIN */
const loginAdminEndpoint = `${loginEndpoint}/admin/`
const createAdminEndpoint = `${adminsEndpoint}/`
const adminProfileEndpoint = `${adminsEndpoint}/profile`
const verifyStudentEndpoint = `${adminsEndpoint}/student/verify`
const deleteAdminAccountEndpoint = `${adminsEndpoint}/`
const deleteStudentAccountFromAdminEndpoint = `${adminsEndpoint}/student`

/* STUDENT */
const loginStudentEndpoint = `${loginEndpoint}/student/`
const createStudentEndpoint = `${studentsEndpoint}/`
const getAllStudentsEndpoint = `${studentsEndpoint}/`
const profileEndpoint = `${studentsEndpoint}/profile`
const deleteStudentAccountEndpoint = `${studentsEndpoint}/`

/* COURSES */
const getAllCoursesEndpoint = `${coursesEndpoint}/all`
const getEnrolledCoursesEndpoint = `${coursesEndpoint}/student/all`
const createCourseEndpoint = `${coursesEndpoint}/`
const updateCourseEndpoint = `${coursesEndpoint}/`
const deleteCourseEndpoint = `${coursesEndpoint}/`

/* CHOREOGRAPHIES */
const getChoreographiesEndpoint = `${choreographiesEndpoint}/admin/all`
const createChoreographyEndpoint = `${choreographiesEndpoint}/`
const updateChoreographyEndpoint = `${choreographiesEndpoint}/`
const deleteChoreographyEndpoint = `${choreographiesEndpoint}/`

/* VIDEOS */
const getStudentVideosEndpoint = `${videosEndpoint}/student/all`
const getAdminVideosEndpoint = `${videosEndpoint}/admin/all`
const createVideoEndpoint = `${videosEndpoint}/`
const deleteVideoEndpoint = `${videosEndpoint}/`

/* ENROLLMENTS */
const getAllEnrollmentsEndpoint = `${enrollmentsEndpoint}/`
const createEnrollmentEndpoint = `${enrollmentsEndpoint}/`
const deleteEnrollmentEndpoint = `${enrollmentsEndpoint}/`

/* COMMON */
const doPost = async (url, data, config = {}) => {
  return axios.post(url, data, config);
};

const doGet = async (url, config) => {
    return axios.get(url, config)
}

const doDelete = async (url, data, config) => {
  return axios.delete(url, { data, ...config });
}

const doPut = async (url, data, config) => {
  return axios.put(url, data, config);
}
    

export default {
    /* ADMIN */
    loginAdminEndpoint,
    createAdminEndpoint,
    adminProfileEndpoint,
    verifyStudentEndpoint,
    deleteAdminAccountEndpoint,
    deleteStudentAccountFromAdminEndpoint,

    /* STUDENT */
    loginStudentEndpoint,
    createStudentEndpoint,
    getAllStudentsEndpoint,
    profileEndpoint,
    deleteStudentAccountEndpoint,

    /* COURSES */
    getAllCoursesEndpoint,
    getEnrolledCoursesEndpoint,
    createCourseEndpoint,
    updateCourseEndpoint,
    deleteCourseEndpoint,

    /* CHOREOGRAPHIES */
    getChoreographiesEndpoint,
    createChoreographyEndpoint,
    updateChoreographyEndpoint,
    deleteChoreographyEndpoint,

    /* VIDEOS */
    getStudentVideosEndpoint,
    getAdminVideosEndpoint,
    createVideoEndpoint,
    deleteVideoEndpoint,

    /* ENROLLMENTS */
    getAllEnrollmentsEndpoint,
    createEnrollmentEndpoint,
    deleteEnrollmentEndpoint,

    /* COMMON */
    doPost,
    doGet,
    doDelete,
    doPut,
}