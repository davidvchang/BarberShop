<script setup lang="ts">
  import { Scissors } from 'lucide-vue-next'
  import { ref } from 'vue';

  import { Users, Calendar, SquareChevronLeft, Menu, SquareX } from 'lucide-vue-next';

  import CountStatisticsContainer from '../components/CountStatisticsContainer.vue'
  import TableTodayAppointments from '../components/TableTodayAppointments.vue'
  import LateralMenu from '../components/LateralMenu.vue'

  const toggleMenu = ref(false)

  const isOpeonMenu = () => {
    toggleMenu.value = !toggleMenu.value;
  }
</script>


<template>
  <div class="flex flex-col bg-BGPrincipal h-dvh gap-10">

    <!-- NAVBAR -->
    <div class="flex justify-between w-full h-14 bg-white shadow-md items-center p-3 gap-2">
      <div class="flex">
        <Scissors class="w-8 h-8 text-blue-600"/>
        <h1 class="text-2xl font-semibold">BarberShop</h1>
      </div>

      <!-- ABRIR Y CERRAR MENU LATRAL -->
      <div v-if="toggleMenu === false">
        <Menu class="w-8 h-8 fixed right-3 top-3  hover:text-blue-400 hover:cursor-pointer hover:transition-all duration-300" @click="isOpeonMenu"/>
      </div>
      <div v-if="toggleMenu === true">
        <SquareX class="w-8 h-8 fixed right-3 top-3 rotate-180  hover:text-blue-400 hover:cursor-pointer hover:transition-all duration-300" @click="isOpeonMenu"/>
      </div>
    
      <div v-if="toggleMenu === true">
          <LateralMenu/>
      </div>
      <!-- ----------------------------- -->
    </div>
    
    <div class="px-10 flex flex-col gap-10">

      <div class="flex w-full justify-between gap-10">
        <CountStatisticsContainer title="Total Appointments" :number="8" :icon="Calendar" color="text-purple-700"/>
        <CountStatisticsContainer title="Today's Appointments" :number="3" :icon="Calendar" color="text-green-700"/>
        <CountStatisticsContainer title="Total Clients" :number="23" :icon="Users" color="text-blue-600"/>
      </div>

      <TableTodayAppointments/>
    </div>

  </div>
</template>
