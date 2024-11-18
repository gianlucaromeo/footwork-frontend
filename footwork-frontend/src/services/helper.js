import axios from 'axios'

const baseUrl = import.meta.env.VITE_BASE_URL

// const studentsEndpoint = `${baseUrl}/students`
const adminsEndpoint = `${baseUrl}/admins`
const loginEndpoint = `${baseUrl}/login`
// const coursesEndpoint = `${baseUrl}/courses`
// const enrollmentsEndpoint = `${baseUrl}/enrollments`
// const choreographiesEndpoint = `${baseUrl}/choreographies`
// const videosEndpoint = `${baseUrl}/videos`

/* ADMIN */
const loginAdminEndpoint = `${loginEndpoint}/admin/`
const createAdminEndpoint = `${adminsEndpoint}/`

const doPost = (url, data) => {
  console.log(('POST', url, data))
  const request = axios.post(url, data)
  return request.then(response => response.data)
}
    

export default {
    loginAdminEndpoint,
    createAdminEndpoint,
    doPost,
}