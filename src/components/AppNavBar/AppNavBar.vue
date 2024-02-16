<script setup lang="ts">
import { ref } from 'vue'

let menuOpened = ref(false)
var toggleMenu = () => (menuOpened.value = !menuOpened.value)
</script>

<template>
  <nav class="navbar p-4 bg-amber-500">
    <div class="container flex justify-between m-auto">
      <router-link to="/" class="navbar-brand">
        <img src="@/assets/logo.svg" alt="Vue logo" />
      </router-link>

      <ul
        class="flex sm:space-x-6 sm:flex"
        :class="{ hidden: menuOpened, 'mob-menu': !menuOpened }"
      >
        <li>
          <router-link to="/" class="nav-link" exact> Home </router-link>
        </li>
        <li>
          <router-link to="/about" class="nav-link"> About </router-link>
        </li>
      </ul>

      <button class="block sm:hidden" @click="toggleMenu">
        <svg
          class="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
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

  @media screen and (max-width: 640px) {
    .mob-menu {
      display: flex;
      flex-direction: column;
      position: absolute;
      width: 90%;
      border-top-right-radius: 20px;
      height: 100vh;
      top: 0;
      left: 0;
      background-color: #f3f4f6;
      padding: 1rem;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      z-index: 100;
    }
  }
}
</style>
