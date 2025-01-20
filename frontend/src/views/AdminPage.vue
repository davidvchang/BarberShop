<script setup lang="ts">
  import { Scissors } from 'lucide-vue-next'
  import CountStatisticsContainer from '../components/CountStatisticsContainer.vue'
</script>


<template>
  <div class="flex flex-col bg-BGPrincipal h-dvh gap-10">

    <!-- NAVBAR -->
    <div class="flex w-full h-14 bg-white shadow-md items-center p-3 gap-2">
      <Scissors class="w-8 h-8"/>
      <h1 class="text-2xl font-semibold">BarberShop</h1>
    </div>

    <div class="px-10">

      <div class="flex w-full justify-between">
        <CountStatisticsContainer title="Total de Citas" number="8"/>
        <CountStatisticsContainer title="Citas Para Hoy" number="2"/>
        <CountStatisticsContainer title="Clientes Totales" number="23"/>
      </div>
    </div>

  </div>
</template>
