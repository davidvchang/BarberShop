<script setup lang="ts">
import type { Component } from 'vue';


defineProps<{
    icon: Component,
    to: string,
    name: string
}>()
</script>

<template>
    <div>
        <RouterLink :to="to" class=" py-3 p-5 rounded-lg flex items-center gap-3 hover:bg-[#5183ef] hover:text-white hover:transition duration-300">
            <component :is="icon" :class="`w-6 h-6`" />
            {{ name }}
        </RouterLink>
    </div>
</template>