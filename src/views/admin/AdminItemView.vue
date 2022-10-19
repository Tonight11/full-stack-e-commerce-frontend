<template>
    <breadcrumb-back></breadcrumb-back>
    <div v-if="product" class="admin-change">
        <app-page>
            <div class="admin-change__in">
                <h2>Change the product</h2>
                <request-admin-item :item="product" btnText="Change"></request-admin-item>
            </div>
        </app-page>
    </div>
</template>

<script setup>
import { defineProps, onMounted, ref } from 'vue'
import { useProductStore } from '@/store/productStore'
import { useDark } from '@vueuse/core'
import AppPage from '@/UI/AppPage'
import RequestAdminItem from '@/components/request/RequestAdminItem'
import BreadcrumbBack from '@/components/BreadcrumbBack'

useDark()

const props = defineProps(['id'])
const productStore = useProductStore()
const product = ref('')

onMounted(async () => {
    const item = await productStore.getOneProduct(props.id)
    product.value = item
})
</script>

<style lang="scss">
.admin-change {
    padding-top: 60px;

    &__in {
        max-width: 600px;
    }

    h2 {
        margin-bottom: 30px;
    }
}
</style>
