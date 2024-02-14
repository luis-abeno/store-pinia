<script setup lang="ts">
import { useProductStore } from '@/stores/product'
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'
import AppContentLoader from '@/components/AppContentLoader.vue'
import BackIcon from '@/components/icons/BackIcon.vue'

const productStore = useProductStore()
const route = useRoute()

const productId = route.params.id as string

onMounted(async () => await productStore.getById(parseInt(productId)))
</script>

<template>
  <AppContentLoader v-if="productStore.loading" class="mt-6" />

  <div v-else class="mt-6">
    <button @click="$router.back()" class="text-blue-500 mb-4">
      <BackIcon />
      Back
    </button>

    <div v-if="productStore.product" class="bg-white p-4 shadow rounded-lg">
      <img
        :src="productStore.product.image"
        :alt="productStore.product.title"
        class="w-full object-contain h-60 mb-4"
      />
      <h2>
        {{ productStore.product.title }}
      </h2>
      <p>{{ productStore.product.description }}</p>
    </div>
  </div>
</template>
