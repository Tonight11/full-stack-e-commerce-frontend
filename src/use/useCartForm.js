import { computed, ref } from 'vue'
import { useCartStore } from '@/store/cartStore'
import { v4 as uuidv4 } from 'uuid'
import { useAuthStore } from '@/store/authStore'
import { useCartSum } from './useCartTotalSum'

export function useCartForm() {
    const mainInfo = ref({
        name: '',
        email: '',
        address: '',
    })
    const cartStore = useCartStore()
    const phoneNumber = ref()
    const results = ref()
    const selected = ref('')
    const options = ref([
        {
            id: uuidv4(),
            value: 'By bank card',
            label: 'By bank card',
        },
        {
            id: uuidv4(),
            value: 'money transfer',
            label: 'money transfer',
        },
        {
            id: uuidv4(),
            value: 'Cash on hand',
            label: 'Cash on hand',
        },
    ])

    const productsInfo = computed(() =>
        cartStore.products.map((i) => `${i.count} of ${i.name}`).join(', ')
    )
    const sum = useCartSum()

    const orderHandler = async () => {
        const dataSend = {
            email: mainInfo.value.email,
            phone: phoneNumber.value,
            name: mainInfo.value.name,
            address: mainInfo.value.address,
            payment: selected.value,
            products: productsInfo.value,
            sum: sum.total.value,
        }
        const order = useAuthStore()
        await order.order(dataSend)
        cartStore.items = []
    }

    return {
        mainInfo,
        cartStore,
        phoneNumber,
        results,
        selected,
        options,
        orderHandler,
    }
}
