let token = null
let role = null
let id = null

const setToken = (newToken) => {
    token = `Bearer ${newToken}`
}

const setRole = (newRole) => {
    role = newRole
}

const setId = (newId) => {
    id = newId
}

const getToken = () => {
    return token
}

const getRole = () => {
    return role
}

const getId = () => {
    return id
}

const clearUser = () => {
    token = null
    role = null
    id = null
}

export default { setToken, setRole, setId, getToken, getRole, getId, clearUser }