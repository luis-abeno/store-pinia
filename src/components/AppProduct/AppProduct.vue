<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    product: {
      type: Object,
      required: true
    }
  }
})
</script>

<template>
  <div class="bg-white p-4 shadow rounded-lg product">
    <img :src="product.image" :alt="product.title" class="w-full h-48 object-contain mb-4" />
    <router-link :to="`/product/${product.id}`" class="underline text-sky-700 w-full mb-4">
      {{ product.title }}
    </router-link>
    <p class="my-4">{{ product.description }}</p>
  </div>
</template>

<style lang="scss">
.product {
  height: 450px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    max-height: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
}
</style>
