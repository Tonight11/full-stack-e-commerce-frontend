import { defineStore } from 'pinia'
import { useAlertStore } from './alertStore'
import { useLoaderStore } from './loadStore'
import axios from '@/axios/request'

export const useProductStore = defineStore('product', {
    state: () => ({
        items: [],
        allItems: [],
        total: 0,
        page: 1,
    }),
    getters: {
        products: (state) => state.items,
        allProducts: (state) => state.allItems,
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
            const load = useLoaderStore()
            try {
                load.load = true
                const { data } = await axios.get(`/product`)
                this.items = data.results
                this.total = data.totalProducts
                this.allItems = data.allProducts
            } catch (e) {
                console.log(e)
            } finally {
                load.load = false
            }
        },
        async getAdminProducts() {
            try {
                const { data } = await axios.get('/admin-product')
                this.allItems = data.allProducts
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
                this.allItems = this.allItems.filter((i) => i._id !== data._id)
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
