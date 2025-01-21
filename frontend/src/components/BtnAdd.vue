<script setup lang="ts">

    defineProps<{
        text: string
        click:  () => void;
    }>()
</script>

<template>
    <button class=" py-2 px-5 min-w-min h-min bg-[#5183ef] text-white rounded-md hover:bg-[#688edf] hover:transition-colors duration-300" @click="click">{{ text }}</button>
</template>