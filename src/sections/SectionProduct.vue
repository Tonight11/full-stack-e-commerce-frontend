<template>
    <div class="product">
        <app-page>
            <div class="product__inner">
                <app-title title="Products" text="There are our latest product" link="product" link-text="see all->"></app-title>
                <div class="product__main">
                    <the-product></the-product>
                </div>
            </div>
        </app-page>
    </div>
</template>

<script setup>

import AppPage from '@/UI/AppPage'
import AppTitle from "@/UI/AppTitle"
import TheProduct from "@/components/TheProduct"

</script>

<style lang="scss">

.product {
    padding-top: 140px;
}

</style>