import { defineStore } from 'pinia'
import axios from '@/axios/request'
import { useAuthStore } from './authStore'

export const useProductStore = defineStore('product', {
    state: () => ({
        items: [],
    }),
    getters: {
        products: (state) => state.items,
    },
    actions: {
        async createProduct(info) {
            // get token so we can check the authorization
            const token = useAuthStore().token
            try {
                const { data } = await axios.post('/product', info, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${token}`,
                    },
                })
                return data
            } catch (e) {
                console.log(e)
            }
        },
        async getProducts() {
            try {
                const { data } = await axios.get('/product')
                this.items = data
            } catch (e) {
                console.log(e)
            }
        },
        async getOneProduct(id) {
            try {
                const { data } = await axios.get(`/product/${id}`)
                return data
            } catch (e) {
                console.log(e)
            }
        },
        async updateProduct(info) {
            const token = useAuthStore().token
            try {
                const { data } = await axios.put('/product', info, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${token}`,
                    },
                })
                console.log(data)
                return data
            } catch (e) {
                console.log(e)
            }
        },
        async deleteProduct(id) {
            const token = useAuthStore().token
            try {
                const { data } = await axios.delete(`/product/${id}`, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${token}`,
                    },
                })
                this.items = this.items.filter((i) => i._id !== data._id)
                return data
            } catch (e) {
                console.log(e)
            }
        },
    },
})
