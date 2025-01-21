<script setup lang="ts">
    import { Scissors } from 'lucide-vue-next'
    import { ref } from 'vue';
    import { Menu, SquareX } from 'lucide-vue-next';

    import LateralMenu from '../components/LateralMenu.vue'

    const toggleMenu = ref(false)

    const isOpeonMenu = () => {
    toggleMenu.value = !toggleMenu.value;
    }
</script>

<template>
    <div class="flex justify-between w-full h-14 bg-white shadow-md border-b items-center p-3 gap-2">
      <div class="flex">
        <Scissors class="w-8 h-8 text-blue-600"/>
        <h1 class="text-2xl font-semibold">BarberShop</h1>
      </div>

      <div>
        <div class="flex items-center gap-3 pr-20">
          <span>Bienvenido, <strong>David</strong></span>
          <div class="w-8 h-8 rounded-full bg-slate-400">
  
          </div>
        </div>
  
        <!-- ABRIR Y CERRAR MENU LATRAL -->
        <div v-if="toggleMenu === false">
          <Menu class="w-8 h-8 absolute right-3 top-3  hover:text-blue-400 hover:cursor-pointer hover:transition-all duration-300" @click="isOpeonMenu"/>
        </div>
        <div v-if="toggleMenu === true">
          <SquareX class="w-8 h-8 fixed right-3 top-3 rotate-180  hover:text-blue-400 hover:cursor-pointer hover:transition-all duration-300" @click="isOpeonMenu"/>
        </div>
  
        <div v-if="toggleMenu === true">
            <LateralMenu/>
        </div>
        <!-- ----------------------------- -->
        
      </div>
    </div>
</template>