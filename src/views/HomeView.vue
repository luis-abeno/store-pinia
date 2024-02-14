<script setup lang="ts">
import { useProductStore } from '@/stores/product'
import { onMounted } from 'vue'
import AppBanner from '@/components/AppBanner.vue'
import AppProduct from '@/components/AppProduct.vue'
import AppContentLoader from '@/components/AppContentLoader.vue'

const productStore = useProductStore()

onMounted(async () => await productStore.fetchProducts())
</script>

<template>
  <section class="home-view">
    <div class="wider">
      <AppBanner />
    </div>

    <div class="pt-6">
      <div
        v-if="productStore.loading"
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        <AppContentLoader v-for="i in 9" :key="i" />
      </div>
      <div
        v-if="productStore.productsList.length > 0"
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        <div v-for="(product, index) in productStore.productsList" :key="index">
          <AppProduct :product="product" v-if="!productStore.loading" />
        </div>
      </div>
    </div>
  </section>
</template>
