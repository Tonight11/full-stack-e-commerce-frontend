import { defineStore } from 'pinia'
import axios from '@/axios/request'

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
                console.log(e)
                throw new Error()
            }
        },
        async logIn(payload) {
            try {
                const { data } = await axios.post('/auth/login', payload)
                console.log(data)
                this.setToken(data)
            } catch (e) {
                console.log(e.response.data.message)
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
                console.log('sucess!!')
            } catch (e) {
                console.log(e.response.data.message)
                throw new Error()
            }
        },
    },
})
