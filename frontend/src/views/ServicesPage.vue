<script setup lang="ts">
    import TableInfo from '../components/TableInfo.vue'
    import BtnAdd from '../components/BtnAdd.vue'
    import AddService from '../views/AddService.vue'

    import { ref } from 'vue';

    const valueModal = ref(false)

    const toggleValueModal = () => {
        valueModal.value = !valueModal.value
    }

</script>

<template>
    <div class="px-10 flex flex-col gap-10 bg-BGPrincipal pt-10" style="height: calc(100dvh - 3.5rem);">
        <TableInfo title="Services" :btn_add="BtnAdd" :btn_add_props="{ text: 'Add Service', click:  toggleValueModal}" name-column1="SERVICE" name-column2="PRICE" name-column3="DESCRIPTION" name-column4="ACTIONS"/>
    </div>

    <div v-if="valueModal === true">
        <AddService :close-modal="toggleValueModal"/>
    </div>
</template>