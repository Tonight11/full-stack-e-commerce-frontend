import { computed } from 'vue'
import { onBeforeRouteLeave, useRoute } from 'vue-router'
import { useFilterStore } from '@/store/filterStore'
import { useProductStore } from '@/store/productStore'

export function useProductItem() {
    const filter = useFilterStore()
    const route = useRoute()
    const productStore = useProductStore()

    // checking the page name, so we can add a specific class in product page and change styles a little
    const page = computed(() => route.name)

    // filter
    const product = computed(() =>
        items.value
            .filter((list) => {
                // if we write smth in search input it will return product with equals letter
                if (filter.search) {
                    return list.name
                        .toLowerCase()
                        .includes(filter.search.toLowerCase())
                }
                // else return default
                return list
            })
            .filter((list) => {
                // if we change slider it will return product that price between them
                if (filter.range) {
                    return (
                        filter.range[0] <= +list.price &&
                        +list.price <= filter.range[1]
                    )
                }
                // else return default
                return list
            })
    )

    const items = computed(() => productStore.products)

    // when we leave the product page all filter settings in store backs to default
    const beforeLeave = onBeforeRouteLeave((to) => {
        if (to.name === 'product') {
            filter.range = [0, 100]
            filter.search = ''
        }
    })

    // return to ProductView
    return {
        filter,
        route,
        page,
        product,
        items,
        beforeLeave,
    }
}
