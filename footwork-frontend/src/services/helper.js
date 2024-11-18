import axios from 'axios'

const baseUrl = import.meta.env.VITE_BASE_URL

const studentsEndpoint = `${baseUrl}/students`
const adminsEndpoint = `${baseUrl}/admins`
const loginEndpoint = `${baseUrl}/login`
const coursesEndpoint = `${baseUrl}/courses`
// const enrollmentsEndpoint = `${baseUrl}/enrollments`
// const choreographiesEndpoint = `${baseUrl}/choreographies`
// const videosEndpoint = `${baseUrl}/videos`

/* ADMIN */
const loginAdminEndpoint = `${loginEndpoint}/admin/`
const createAdminEndpoint = `${adminsEndpoint}/`

/* STUDENT */
const loginStudentEndpoint = `${loginEndpoint}/student/`
const createStudentEndpoint = `${studentsEndpoint}/`

/* COURSES */
const getAllCoursesEndpoint = `${coursesEndpoint}/all`

/* COMMON */
const doPost = async (url, data) => {
  console.log(('POST', url, data))
  const request = axios.post(url, data)
  return request.then(response => response.data)
}

const doGet = (url) => {
    console.log(('GET', url))
    const request = axios.get(url)
    return request.then(response => response.data)
}
    

export default {
    /* ADMIN */
    loginAdminEndpoint,
    createAdminEndpoint,

    /* STUDENT */
    loginStudentEndpoint,
    createStudentEndpoint,

    /* COURSES */
    getAllCoursesEndpoint,

    /* COMMON */
    doPost,
    doGet,
}