<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppNavBar from './components/AppNavBar.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <main>
    <AppNavBar />

    <div class="container m-auto content-area">
      <RouterView />
    </div>

    <AppFooter />
  </main>
</template>

<style lang="scss" scoped>
.content-area {
  min-height: calc(100vh - 200px);
}
</style>
