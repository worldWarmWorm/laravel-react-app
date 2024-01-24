import axios from "axios"

const accessToken = 'ACCESS_TOKEN'
const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_APP_BASE_URL}/api`
})

axiosClient.interceptors.request.use(config => {
    const token = localStorage.getItem(accessToken)
    config.headers.Authorization = `Bearer ${token}`

    return config
})

axiosClient.interceptors.response.use(
    response => response,
    error => {
        try {
            const {response} = error

            if (response.status === 401) {
                localStorage.removeItem(accessToken)
            }
        } catch (e) {
            console.error(e)
        }

        throw error
    }
)

export default axiosClient
