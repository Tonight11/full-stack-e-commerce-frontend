import { computed } from 'vue'
import { useCartStore } from '@/store/cartStore'

export function useCartSum() {
    const cartStore = useCartStore()
    const cartItems = computed(() => cartStore.products)
    const total = computed(() => {
        return cartItems.value.reduce((acc, item) => {
            return acc + item.count * +item.price
        }, 0)
    })

    return {
        cartItems,
        cartStore,
        total,
    }
}
