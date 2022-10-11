<template>
    <div class="product-item product-page" v-if="products?.length">
        <TransitionGroup name="product-anim">
            <div class="product-item__column" v-for="item in products" :key="item._id">
                <div class="product-item__item product-page__item">
                    <div class="product-page__img">
                        <img :src="server + item.picture" alt="product-item">
                    </div>
                    <div class="product-item__info">
                        <div class="product-item__name">
                            {{ item.name }}
                        </div>
                        <div class="product-item__bot">
                            daw
<!--                            <router-link-->
<!--                                custom v-slot="{navigate}"-->
<!--                                :to="{name: 'productItem', params: {id: item._id}}"-->
<!--                            >-->
<!--                                <app-button text="View" @click="navigate"></app-button>-->
<!--                            </router-link>-->
                        </div>
                    </div>
                </div>
            </div>
        </TransitionGroup>
    </div>
</template>

<script setup>
import {useProductStore} from "@/store/productStore";
import {computed, onMounted} from "vue";

const server = process.env.VUE_APP_SERVER
const productStore = useProductStore()
const products = computed(() => productStore.adminProducts)

onMounted(async () => {
    await productStore.getAdminProduct()
})
</script>

<style lang="scss">
@import "@/assets/scss/producs.scss";
</style>