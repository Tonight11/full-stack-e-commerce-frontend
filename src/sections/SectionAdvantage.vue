<template>
    <section class="advantage">
        <app-page>
            <div class="advantage__inner">
                <app-title title="Advantages"></app-title>
                <advantage-icon class="advantage__anim"></advantage-icon>
                <request-advantage
                    v-for="(item, idx) in advantageText"
                    :key="item.id"
                    :text="item.text"
                    :count="idx"
                ></request-advantage>
            </div>
        </app-page>
    </section>
</template>

<script setup>
import AppPage from '@/UI/AppPage'
import AppTitle from '@/UI/AppTitle'
import AdvantageIcon from '@/icons/AdvantageIcon'
import RequestAdvantage from '@/components/request/RequestAdvantage'
import { ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'

const advantageText = ref([
    {
        id: uuidv4(),
        text: 'Nowadays a lot shops have a delivery, but it`s too expensive, doesn`t it? WE provide a free shipping over the world. Yeah it`s absolutle for free',
    },
    {
        id: uuidv4(),
        text: 'Lore lorem Lore lorem insup Lore lorem insup Lore lorem insup Lore lorem insup Lore lorem insup Lore lorem insup Lore lorem insup ',
    },
    {
        id: uuidv4(),
        text: 'Lore lorem Lore lorem insup Lore lorem insup Lore lorem insup Lore lorem insup Lore lorem insup Lore lorem insup Lore lorem insup ',
    },
    {
        id: uuidv4(),
        text: 'Lore lorem Lore lorem insup Lore lorem insup Lore lorem insup Lore lorem insup Lore lorem insup Lore lorem insup Lore lorem insup ',
    },
])
</script>

<style lang="scss">
.advantage {
    padding-top: 140px;

    @media screen and (max-width: 827px) {
        padding-top: 50px;
    }

    &__inner {
        position: relative;
    }

    &__anim {
        display: block;
        margin: 0 auto;
    }
}
</style>
