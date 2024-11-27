let token = localStorage.getItem('token') || null
let firstName = localStorage.getItem('firstName') || null
let role = localStorage.getItem('role') || null
let isVerifiedByAdmin = localStorage.getItem('isVerifiedByAdmin') || null

const setToken = (newToken) => {
    token = `Bearer ${newToken}`
    localStorage.setItem('token', token)
}

const getToken = () => {
    return token || localStorage.getItem('token')
}

const setFirstName = (newFirstName) => {
    firstName = newFirstName
    localStorage.setItem('firstName', newFirstName)
}

const getFirstName = () => {
    return firstName || localStorage.getItem('firstName')
}

const setRole = (newRole) => {
    role = newRole
    localStorage.setItem('role', newRole)
}

const getRole = () => {
    return role || localStorage.getItem('role')
}

const setIsVerifiedByAdmin = (newIsVerifiedByAdmin) => {
    isVerifiedByAdmin = newIsVerifiedByAdmin
    localStorage.setItem('isVerifiedByAdmin', newIsVerifiedByAdmin)
}

const getIsVerifiedByAdmin = () => {
    return localStorage.getItem('isVerifiedByAdmin') === 'true' || false
}

const clearUser = () => {
    token = null
    firstName = null
    role = null
    isVerifiedByAdmin = null
    localStorage.removeItem('token')
    localStorage.removeItem('firstName')
    localStorage.removeItem('role')
    localStorage.removeItem('isVerifiedByAdmin')
}

export default {
    setToken,
    getToken,
    setFirstName,
    getFirstName,
    setRole,
    getRole,
    setIsVerifiedByAdmin,
    getIsVerifiedByAdmin,
    clearUser,
}
