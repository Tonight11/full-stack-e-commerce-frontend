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
        /* eslint-disable */
        async order(payload) {
            const alert = useAlertStore()
            try {
    			const res = await fetch(
    				'https://formsubmit.co/ajax/godofspeedman@gmail.com',
    				{
    					method: 'POST',
    					headers: {
    						'Content-Type': 'application/json',
    						Accept: 'application/json',
    					},
    					body: JSON.stringify({
    						name: payload.email,
    						message: `name: ${payload.name}, phone: ${payload.phone}, address: ${payload.address}, payment: ${payload.payment}, products: ${payload.products}, sum: ${payload.sum}`,
    					}),
    				}
    			);
    			const data = await res.json();
                console.log(data)
    			alert.setMsg({
                    value: `Success!!! wait for a couple of minute. A moderator will call you back!`,
                    type: 'success',
                })
    		} catch (error) {
                console.log(error)
    			alert.setMsg({
                    value: `Error`,
                    type: 'error',
                })
    		}
        },
    },
})
