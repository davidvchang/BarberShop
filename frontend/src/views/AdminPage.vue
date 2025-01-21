<script setup lang="ts">
  import { Scissors } from 'lucide-vue-next'
  import { Users, Calendar } from 'lucide-vue-next';
  import CountStatisticsContainer from '../components/CountStatisticsContainer.vue'
  import TableTodayAppointments from '../components/TableTodayAppointments.vue'
</script>


<template>
  <div class="flex flex-col bg-BGPrincipal h-dvh gap-10">

    <!-- NAVBAR -->
    <div class="flex w-full h-14 bg-white shadow-md items-center p-3 gap-2">
      <Scissors class="w-8 h-8 text-blue-600"/>
      <h1 class="text-2xl font-semibold">BarberShop</h1>
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
