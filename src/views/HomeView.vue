<script setup lang="ts">
import AppBanner from '@/components/AppBanner.vue'
import AppProduct from '@/components/AppProduct.vue'
</script>

<template>
  <section class="home-view">
    <div class="wider">
      <AppBanner />
    </div>

    <div class="pt-6">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <AppProduct />
      </div>
    </div>
  </section>
</template>
