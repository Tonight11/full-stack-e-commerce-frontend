import axios from 'axios'
import router from '@/router'
import { useAuthStore } from '@/store/authStore'
import { useAlertStore } from '@/store/alertStore'

const requestAxios = axios.create({
    withCredentials: true,
    baseURL: process.env.VUE_APP_SERVER,
})

requestAxios.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem(
        'access-token'
    )}`
    return config
})

requestAxios.interceptors.response.use(
    (config) => {
        config.headers.Authorization = `Bearer ${localStorage.getItem(
            'access-token'
        )}`
        return config
    },
    async (error) => {
        const authStore = useAuthStore()
        const alert = useAlertStore()

        try {
            if (error.response.status === 401) {
                const response = await axios.get(
                    `${process.env.VUE_APP_SERVER}auth/refresh`,
                    { withCredentials: true }
                )
                localStorage.setItem('access-token', response.data.accesToken)
                error.config.headers.Authorization = `Bearer ${localStorage.getItem(
                    'access-token'
                )}`

                return requestAxios.request(error.config)
            }

            alert.setMsg({
                value: error.response.data.message,
                type: 'error',
            })
        } catch (e) {
            authStore.logOut()
            router.push('/auth?errMsg=auth')
        }
    }
)

export default requestAxios
