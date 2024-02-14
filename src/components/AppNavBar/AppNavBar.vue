<script setup lang="ts"></script>

<template>
  <nav class="navbar p-4 bg-amber-500">
    <div class="container flex justify-between m-auto">
      <router-link to="/" class="navbar-brand">
        <img src="@/assets/logo.svg" alt="Vue logo" />
      </router-link>

      <ul class="flex space-x-6">
        <li class="p-2">
          <router-link to="/" class="nav-link" exact> Home </router-link>
        </li>
        <li class="p-2">
          <router-link to="/about" class="nav-link"> About </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.navbar {
  .navbar-brand {
    img {
      width: 2rem;
      height: 2rem;
      margin-right: 0.5rem;
    }
  }
}
</style>
