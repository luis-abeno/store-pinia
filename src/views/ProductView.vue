<script setup lang="ts">
import { useProductStore } from '@/stores/product'
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'

const productStore = useProductStore()
const route = useRoute()

const productId = route.params.id as string

const isLoading = ref(true)

onMounted(async () => {
  await productStore.getById(parseInt(productId))
  isLoading.value = false
})
</script>

<template>
  <div v-if="isLoading" class="loader">Loading...</div>

  <div v-else class="mt-6">
    <!-- Add a back button with an arrow -->
    <button @click="$router.back()" class="text-blue-500 mb-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 inline-block"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
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
