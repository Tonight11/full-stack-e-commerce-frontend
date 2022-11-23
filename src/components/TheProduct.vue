<template>
    <div class="product-item product-page">
        <TransitionGroup name="product-anim">
            <div
                class="product-item__column"
                v-for="item in products.value"
                :key="item._id"
            >
                <div class="product-item__item product-page__item">
                    <div class="product-page__img">
                        <img :src="item.picture.url" alt="product-item" />
                    </div>
                    <div class="product-item__info">
                        <div class="product-item__category">
                            {{ item.category }}
                        </div>
                        <div class="product-item__name">
                            {{ item.name }}
                        </div>
                        <div
                            class="product-item__size"
                            v-if="item.size?.length"
                        >
                            <div class="product-item__size-name">Size:</div>
                            <div class="product-item__size-items">
                                <div
                                    class="product-item__size-item"
                                    v-for="(size, idx) in item.size"
                                    :key="idx"
                                >
                                    {{ size
                                    }}<span v-if="idx + 1 !== item.size.length"
                                        >,</span
                                    >
                                </div>
                            </div>
                        </div>
                        <div class="product-item__bot">
                            <router-link
                                custom
                                v-slot="{ navigate }"
                                :to="{
                                    name: 'productItem',
                                    params: { id: item._id },
                                }"
                            >
                                <app-button
                                    text="View"
                                    @click="navigate"
                                ></app-button>
                            </router-link>
                            <div class="product-item__price">
                                <div class="product-item__price-item">
                                    {{ item.price }}
                                </div>
                                <span>$</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </TransitionGroup>
    </div>
</template>

<script setup>
import AppButton from '@/UI/AppButton'
import { defineProps } from 'vue'

defineProps({
    products: Array,
})
</script>

<style lang="scss">
@import '@/assets/scss/producs.scss';
</style>
