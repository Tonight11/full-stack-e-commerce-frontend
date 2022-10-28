<template>
    <div class="product">
        <app-page>
            <div class="product__inner">
                <app-title
                    title="Products"
                    text="There are our latest product"
                    link="product"
                    link-text="see all->"
                ></app-title>
                <div class="product__main">
                    {{ load.loaded }}
                    <loading-product
                        v-if="load.loaded === true"
                    ></loading-product>
                    <the-latest v-else></the-latest>
                </div>
            </div>
        </app-page>
    </div>
</template>

<script setup>
import AppPage from '@/UI/AppPage'
import AppTitle from '@/UI/AppTitle'
import TheLatest from '@/components/TheLatest'
import LoadingProduct from '@/components/LoadingProduct.vue'
import { useLoaderStore } from '@/store/loadStore'
const load = useLoaderStore()
</script>

<style lang="scss">
.product {
    padding-top: 140px;

    @media screen and (max-width: 827px) {
        padding-top: 50px;
    }
}
</style>
