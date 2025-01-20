<script setup lang="ts">
import type { Component} from 'vue';


    defineProps<{
        title: string,
        number: number,
        icon: Component,
        color: string
    }>()
</script>

<template>
    <div class="flex bg-white rounded-md p-7 shadow-lg gap-5 flex-grow items-center">
        <component :is="icon" :class="`w-10 h-10 ${color}`" />

        <div class="flex flex-col">
            <span class="text-slate-500 text-sm font-semibold">{{ title }}</span>
            <span class="text-2xl font-semibold">{{ number }}</span>
        </div>
    </div>
</template>