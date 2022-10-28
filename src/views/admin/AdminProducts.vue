<template>
    <app-loader v-if="products.length === 0"></app-loader>
    <div
        class="product-item product-page product-admin"
        v-else-if="products?.length"
    >
        <TransitionGroup name="product-anim">
            <div
                class="product-item__column"
                v-for="item in products"
                :key="item._id"
            >
                <div
                    class="product-item__item product-page__item product-admin-item"
                >
                    <div class="product-page__img product-admin__img">
                        <img :src="server + item.picture" alt="product-item" />
                    </div>
                    <div class="product-item__info">
                        <div class="product-item__name">
                            {{ item.name }}
                        </div>
                        <div class="product-item__btns">
                            <router-link
                                custom
                                v-slot="{ navigate }"
                                :to="{
                                    name: 'adminItem',
                                    params: { id: item._id },
                                }"
                            >
                                <app-button
                                    text="Change"
                                    @click="navigate"
                                    class="btn-change"
                                ></app-button>
                            </router-link>
                            <app-button
                                text="Delete"
                                @click="deleteProduct(item._id)"
                                class="btn-delete"
                            ></app-button>
                        </div>
                    </div>
                </div>
            </div>
        </TransitionGroup>
    </div>
    <div v-else>
        There are no porduct.
        <router-link :to="{ name: 'AdminAddProduct' }">ADD</router-link>
    </div>
</template>

<script setup>
import { useProductStore } from '@/store/productStore'
import { computed, onMounted } from 'vue'
import AppButton from '@/UI/AppButton'
import AppLoader from '@/UI/AppLoader.vue'

const server = process.env.VUE_APP_SERVER
const productStore = useProductStore()
const products = computed(() => productStore.allProducts)

onMounted(async () => {
    await productStore.getAdminProducts()
})

const deleteProduct = async (id) => {
    await productStore.deleteProduct(id)
}
</script>

<style lang="scss">
@import '@/assets/scss/producs.scss';

.product-item__btns {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.product-item__btns {
    margin-top: auto;
}

.btn-change {
    background-color: #0741ff !important;
    color: white !important;
}

.btn-delete {
    background-color: #ff0707 !important;
    color: white !important;
}
</style>
