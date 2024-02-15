<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppNavBar from './components/AppNavBar/AppNavBar.vue'
import AppFooter from './components/AppFooter/AppFooter.vue'
</script>

<template>
  <main>
    <AppNavBar />

    <div class="container m-auto content-area px-4 sm:px-0">
      <RouterView />
    </div>

    <div class="mt-8">
      <AppFooter />
    </div>
  </main>
</template>

<style lang="scss" scoped>
.content-area {
  min-height: calc(100vh - 200px);
}
</style>
