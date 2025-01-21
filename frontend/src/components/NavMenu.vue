<script setup lang="ts">

defineProps<{
    to: string,
    name: string
}>()
</script>

<template>
    <RouterLink :to="to" class="p-2">{{ name }}</RouterLink>
</template>