let token = null

const setToken = (newToken) => {
    token = `Bearer ${newToken}`
}

const getToken = () => {
    return token
}

const clearUser = () => {
    token = null
}

export default { setToken, getToken, clearUser }