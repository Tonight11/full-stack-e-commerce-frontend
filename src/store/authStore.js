import { defineStore } from 'pinia'
import axios from '@/axios/request'
import { useAlertStore } from './alertStore'

const TOKEN = 'access-token'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        auth: localStorage.getItem(TOKEN) || null,
    }),
    getters: {
        token: (state) => state.auth,
        isAuth() {
            return !!this.token
        },
    },
    actions: {
        setToken({ accesToken }) {
            this.auth = accesToken
            localStorage.setItem(TOKEN, accesToken)
        },
        async logOut() {
            try {
                await axios.post('/auth/logout')
                this.auth = null
                localStorage.removeItem(TOKEN)
            } catch (e) {
                throw new Error()
            }
        },
        async logIn(payload) {
            try {
                const { data } = await axios.post('/auth/login', payload)
                this.setToken(data)
            } catch (e) {
                throw new Error()
            }
        },
        async register(payload) {
            try {
                await axios.post('/auth/register', payload, {
                    headers: {
                        Authorization: `Bearer ${this.auth}`,
                    },
                })
            } catch (e) {
                throw new Error()
            }
        },
        async order(payload) {
            const alert = useAlertStore()
            try {
                await axios.post('/auth/order', payload)
                alert.setMsg({
                    value: `Success!!! wait for a couple of minute. A moderator will call you back!`,
                    type: 'success',
                })
            } catch (error) {
                console.log(error)
            }
        },
    },
})
