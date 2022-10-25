import { defineStore } from 'pinia'
import { useAlertStore } from './alertStore'
import axios from '@/axios/request'

export const useProductStore = defineStore('product', {
    state: () => ({
        items: [],
    }),
    getters: {
        products: (state) => state.items,
    },
    actions: {
        async createProduct(info) {
            const alert = useAlertStore()
            // get token so we can check the authorization
            try {
                const { data } = await axios.post('/product', info, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                })
                alert.setMsg({
                    value: `The ${data.category} ${data.name} added`,
                    type: 'success',
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
        async getAdminProducts() {
            try {
                const { data } = await axios.get('/admin-product')
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
            const alert = useAlertStore()
            try {
                const { data } = await axios.put('/product', info, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                })
                alert.setMsg({
                    value: `The ${data.category} ${data.name} succesfully updated`,
                    type: 'success',
                })
                return data
            } catch (e) {
                console.log(e)
            }
        },
        async deleteProduct(id) {
            const alert = useAlertStore()
            try {
                const { data } = await axios.delete(`/product/${id}`, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                })
                this.items = this.items.filter((i) => i._id !== data._id)
                alert.setMsg({
                    value: `The ${data.category} ${data.name} succesfully deleted`,
                    type: 'success',
                })
                return data
            } catch (e) {
                console.log(e)
            }
        },
    },
})
