<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import NavBar from './components/NavBar.vue'
</script>

<template>
  <main>
    <NavBar/>
    <div>
      <RouterView />
    </div>
  </main>
</template>