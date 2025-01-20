<script setup lang="ts">
    import { Calendar } from 'lucide-vue-next';

    defineProps<{
        title: string,
        number: number
    }>()
</script>

<template>
    <div class="flex bg-white rounded-md p-5 shadow-md gap-5">
        <Calendar class="w-12 h-12"/>

        <div class="flex flex-col">
            <span class="text-slate-500 text-sm font-semibold">{{ title }}</span>
            <span class="text-2xl font-semibold">{{ number }}</span>
        </div>
    </div>
</template>