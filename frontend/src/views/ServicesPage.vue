<script setup lang="ts">
    import TableInfo from '../components/TableInfo.vue'
    import BtnAdd from '../components/BtnAdd.vue'

</script>

<template>
    <div class="px-10 flex flex-col gap-10 bg-BGPrincipal pt-10" style="height: calc(100dvh - 3.5rem);">
        <TableInfo title="Services" :btn_add="BtnAdd" :btn_add_props="{ text: 'Add Service' }" name-column1="SERVICE" name-column2="PRICE" name-column3="DESCRIPTION" name-column4="ACTIONS"/>
    </div>
</template>