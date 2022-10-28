<template>
    <main class="main">
        <app-page>
            <div class="product-inner">
                <the-sidebar title="Filter">
                    <request-sidebar></request-sidebar>
                </the-sidebar>
                <div class="product__main">
                    <app-loader v-if="product.value.length === 0"></app-loader>
                    <the-product v-else :products="product"></the-product>
                    <v-pagination
                        v-model="page"
                        :pages="totalPage"
                        :range-size="1"
                        :active-color="pagColor"
                        @update:modelValue="updateHandler"
                    />
                </div>
            </div>
        </app-page>
    </main>
</template>

<script setup>
import TheSidebar from '@/components/TheSidebar'
import AppPage from '@/UI/AppPage'
import TheProduct from '@/components/TheProduct'
import AppLoader from '@/UI/AppLoader.vue'
import RequestSidebar from '@/components/request/RequestSidebar'
import { useProductItem } from '@/use/useProduct'
import { useProductStore } from '@/store/productStore'
import { computed, onMounted, ref } from 'vue'
import { useDark } from '@vueuse/core'
import VPagination from '@hennge/vue3-pagination'
import '@hennge/vue3-pagination/dist/vue3-pagination.css'

const isDark = useDark()
const pagColor = isDark.value ? '#fff500' : '#bd00ff'
const page = ref(1)
const productUse = useProductItem()
const productStore = useProductStore()

onMounted(async () => {
    await productStore.getProducts()
})

const updateHandler = async (e) => {
    productStore.items = []
    productStore.page = e
    await productStore.getProducts()
}

const product = computed(() => productUse.product)

const totalPage = computed(() => {
    return Math.ceil(productStore.total / 6)
})
</script>

<style lang="scss">
.product-inner {
    padding: 25px 0;
    display: flex;
    gap: 50px;

    &__main {
        flex: 1;
    }

    @media screen and (max-width: 900px) {
        flex-direction: column;
    }
}
</style>
