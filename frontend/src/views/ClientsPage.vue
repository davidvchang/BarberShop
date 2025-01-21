<script setup lang="ts">
import TableInfo from '../components/TableInfo.vue'

</script>

<template>
    <div class="px-10 flex flex-col gap-10 bg-BGPrincipal pt-10" style="height: calc(100dvh - 3.5rem);">
        <TableInfo title="Clients" name-column1="NAME" name-column2="EMAIL" name-column3="NUMBER" name-column4="TOTAL VISITS"/>
    </div>
</template>