<template>
    <div class="product-skelet">
        <div
            class="product-skelet__column"
            v-for="item in total"
            :key="item.id"
        >
            <div class="product-skelet__item">
                <div class="product-skelet__img"></div>
                <div class="product-skelet__info">
                    <div class="product-skelet__category">*****</div>
                    <div class="product-skelet__name">**************</div>
                    <div class="product-skelet__bot">
                        <div class="product-skelet__price">
                            <div class="product-skelet__price-item">***</div>
                            <span>$</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useMediaQuery } from '@vueuse/core'

const isLargeScreen = useMediaQuery('(min-width: 768px)')
const total = computed(() => {
    if (isLargeScreen) {
        return 8
    } else {
        return 4
    }
})
</script>

<style lang="scss">
html.dark {
    .product-skelet {
        &__item {
            background-color: #474747;
        }

        &__img {
            background-color: #383838;
        }

        &__info {
            color: white;
        }
    }
}

.product-skelet {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -20px;
    row-gap: 40px;

    &__column {
        flex: 0 1 25%;
        padding: 0 20px;

        @media screen and (max-width: 1100px) {
            flex: 0 1 33.333%;
        }
        @media screen and (max-width: 827px) {
            flex: 0 1 50%;
        }
        @media screen and (max-width: 547px) {
            flex: 0 1 100%;
            max-width: 400px;
            margin: 0 auto;
        }
    }

    &__item {
        background: #ffffff;
        box-shadow: 5px 5px 5px 2px rgba(0, 0, 0, 0.15);
        display: flex;
        flex-direction: column;
        height: 100%;

        &:hover {
            box-shadow: 5px 5px 5px 2px rgba(0, 0, 0, 0.23);
        }
    }

    &__img {
        min-height: 320px;
        width: 100%;
        background-color: #4f4f4f;

        @media screen and (max-width: 547px) {
            height: 400px;
        }
        @media screen and (max-width: 400px) {
            height: 280px;
        }
    }

    &__info {
        padding: 8px;
        color: #000000;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    &__category {
        font-size: 14px;

        color: #4f4f4f;
        margin-bottom: 5px;
    }

    &__name {
        font-size: 20px;
        margin-bottom: 10px;
        @media screen and (max-width: 827px) {
            font-size: 18px;
        }
    }

    &__bot {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: auto;
    }

    &__price {
        font-weight: 600;
        font-size: 18px;

        &-item {
            display: inline-block;
        }
    }
}
</style>
