<template>
    <main class="main">
        <app-page>
            <div class="product-inner">
                <the-sidebar title="Filter">
                    <request-sidebar></request-sidebar>
                </the-sidebar>
                <app-loader v-if="product.value.length === 0"></app-loader>
                <the-product v-else :products="product"></the-product>
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
import { computed, onMounted } from 'vue'

const productUse = useProductItem()
const productStore = useProductStore()

onMounted(async () => {
    await productStore.getProducts()
})

const product = computed(() => productUse.product)
</script>

<style lang="scss">
.product-inner {
    padding: 25px 0;
    display: flex;
    gap: 50px;

    @media screen and (max-width: 900px) {
        flex-direction: column;
    }
}
</style>
