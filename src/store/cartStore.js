import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core/index'

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: useLocalStorage('products', []),
    }),
    getters: {
        products: (state) => state.items,
    },
    actions: {
        addToCart(item) {
            if (!item.inCart) {
                item.inCart = true
                item.count = 1
                this.items.push(item)
            }
        },
        deleteFromCart(product) {
            console.log(product)
            if (product.inCart) {
                product.inCart = false
                product.count = 0
                this.items = this.items.filter(
                    (item) => item._id !== product._id
                )
            }
        },
    },
})
