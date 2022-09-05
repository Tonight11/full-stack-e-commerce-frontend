<template>
    <main class="main">
        <app-page>
            <div class="product-inner">
                <the-sidebar></the-sidebar>
                <the-product></the-product>
            </div>
        </app-page>
    </main>
</template>

<script setup>
import TheSidebar from "@/components/TheSidebar"
import AppPage from "@/UI/AppPage"
import TheProduct from "@/components/TheProduct"
</script>

<style lang="scss">

.product-inner {
    margin-top: 25px;
    display: flex;
    gap: 50px;

    @media screen and (max-width: 900px) {
        flex-direction: column;
    }
}

</style>