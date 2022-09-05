<template>
    <aside class="sidebar">
        <div class="sidebar__title">Filter</div>
        <request-sidebar></request-sidebar>
    </aside>
</template>

<script setup>
import RequestSidebar from "@/components/request/RequestSidebar"
</script>

<style lang="scss">

.sidebar {
    max-width: 280px;
    padding: 30px;
    background: #FFFFFF;
    box-shadow: 0px 4px 35px 6px rgba(0, 0, 0, 0.10);

    @media screen and (max-width: 900px) {
        max-width: 100%;
    }

    &__title {
        font-weight: 600;
        font-size: 28px;
        margin-bottom: 50px;
    }
}

</style>