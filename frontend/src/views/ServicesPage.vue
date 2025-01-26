<script setup lang="ts">
    import TableServices from '../components/TableServices.vue'
    import BtnAdd from '../components/BtnAdd.vue'
    import AddService from '../views/AddService.vue'
    import { ref } from 'vue';

    const valueModal = ref(false)
    const selectedService = ref<DataForm | null>(null);

    const toggleValueModal = () => {
        valueModal.value = !valueModal.value
    }

    const openEditModal = (service: DataForm) => {
        selectedService.value = service;
        toggleValueModal();
    };
</script>

<template>
    <div class="px-10 flex flex-col gap-10 bg-BGPrincipal pt-10" style="height: calc(100dvh - 3.5rem);" :class="{'blur-sm': valueModal}">
        <TableServices title="Services" @edit-service="openEditModal" :btn_add="BtnAdd" :btn_add_props="{ text: 'Add Service', click:  toggleValueModal}" name-column1="SERVICE" name-column2="PRICE" name-column3="DESCRIPTION" name-column4="ACTIONS"/>
    </div>

    <div v-if="valueModal === true" class="fixed inset-0 bg-black bg-opacity-5 flex items-center justify-center z-50">
        <AddService v-if="valueModal" :close-modal="toggleValueModal" :service-to-edit="selectedService"/>
    </div>
</template>