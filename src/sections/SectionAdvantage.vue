<template>
    <section class="advantage">
        <app-page>
            <div class="advantage__inner">
                <app-title title="Advantages"></app-title>
                <advantage-icon class="advantage__anim"></advantage-icon>
            </div>
        </app-page>
    </section>
</template>

<script setup>

import AppPage from "@/UI/AppPage"
import AppTitle from "@/UI/AppTitle"
import AdvantageIcon from "@/icons/AdvantageIcon"

</script>

<style lang="scss">

.advantage {
    padding-top: 140px;

    &__anim {
        display: block;
        margin: 0 auto;
    }
}

</style>