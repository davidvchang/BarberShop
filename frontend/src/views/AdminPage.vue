<script setup lang="ts">
  import { Users, Calendar} from 'lucide-vue-next';

  import CountStatisticsContainer from '../components/CountStatisticsContainer.vue'
  import TableTodayAppointments from '../components/TableTodayAppointments.vue'
</script>


<template>
    
    <div class="px-10 flex flex-col gap-10 bg-BGPrincipal pt-10" style="height: calc(100dvh - 3.5rem);">

      <div class="flex w-full justify-between gap-10">
        <CountStatisticsContainer title="Total Appointments" :number="8" :icon="Calendar" color="text-purple-700"/>
        <CountStatisticsContainer title="Today's Appointments" :number="3" :icon="Calendar" color="text-green-700"/>
        <CountStatisticsContainer title="Total Clients" :number="23" :icon="Users" color="text-blue-600"/>
      </div>

      <TableTodayAppointments/>
    </div>
</template>
