<template>
  <footer class="bg-amber-500 p-4">
    <div class="container m-auto">
      <p class="text-center text-white">
        &copy; <span>{{ currentYear }}</span> Vue 3 + Vite + Tailwind CSS
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>
