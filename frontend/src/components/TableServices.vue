<script setup lang="ts">
    import { ChevronDown } from 'lucide-vue-next';
    import { onMounted, ref, type Component } from 'vue';
    import SearchInput from '../components/SearchInput.vue'
    import axios from 'axios';
import Swal from 'sweetalert2';

    const urlAPI: string = import.meta.env.VITE_POST_SERVICE;

    defineProps<{
        title: string,
        nameColumn1: string,
        nameColumn2: string,
        nameColumn3: string,
        nameColumn4: string,
        btn_add?: Component,
        btn_add_props?: Record<string, unknown>,
    }>()

    const dataServices = ref<DataForm[]>([])
    const visibilityOptions = ref<Record<string, boolean>>({});

    interface DataForm{
        _id: string,
        name: string,
        price: number | null,
        description: string
    }

    const getServices = async () => {
        const res = await axios.get(urlAPI)
        dataServices.value = res.data
    }

    const toggleVisibility = (id: string) => {
        if (visibilityOptions.value[id]) {
            visibilityOptions.value[id] = false;
        } else {
            Object.keys(visibilityOptions.value).forEach(key => {
                visibilityOptions.value[key] = false;
            });
            visibilityOptions.value[id] = true;
        }
    }

    const deleteService = async (id_service: number) => {
        const res = await axios.delete(urlAPI + id_service)
        if(res.status === 200) {
            Swal.fire({
                title: 'Deleted',
                text: 'The service has been deleted correctly.',
                icon: 'success',
                confirmButtonText: 'Close'
            })
        }
        else {
            Swal.fire({
                title: 'Error',
                text: 'Has been happened a error while deleted the service.',
                icon: 'error',
                confirmButtonText: 'Close'
            })
        }
    }

    onMounted(() => {
        getServices();
    });
</script>

<template>
    <div class="flex flex-col rounded-md overflow-hidden">
        <div class="bg-white py-5 px-7 border rounded-md flex justify-between items-center">
            <div class="flex gap-5 items-center">
                <span class="text-lg font-medium ">{{ title }}</span>
                <SearchInput/>
            </div>
            <component v-if="btn_add" :is="btn_add" v-bind="btn_add_props" />
        </div>
        <table class="w-full border-collapse">
            <thead class="bg-BGPrincipal w-full">
                <tr class="border">
                    <th class="font-medium text-gray-500 py-3 pl-7 text-left text-xs">{{nameColumn1}}</th>
                    <th class="font-medium text-gray-500 py-3 text-left text-xs">{{ nameColumn2 }}</th>
                    <th class="font-medium text-gray-500 py-3 text-left text-xs">{{ nameColumn3 }}</th>
                    <th class="font-medium text-gray-500 py-3 text-left text-xs">{{ nameColumn4 }}</th>
                </tr>
            </thead>
            <tbody class="bg-white w-full">
                <tr class="border"  v-for="service in dataServices" :key="service._id">
                    <td class="py-4 pl-7 text-sm">{{ service.name }}</td>
                    <td class="py-4 text-sm">${{ service.price }}</td>
                    <td class="py-4 text-sm">{{ service.description }}</td>
                    <td class="py-4 text-sm">
                        <div class="w-fit relative">
                            <button class="flex gap-1 py-1 px-2 text-[13px] items-center bg-blue-50 text-sky-600 font-medium rounded-sm hover:bg-sky-100 hover:transition-all duration-300" @click="toggleVisibility(service._id)">Options <ChevronDown class="text-blue-500 w-5 h-5"/></button>
                            <div class="flex flex-col gap-2 absolute z-40 w-full top-8 bg-white border shadow-md p-1 rounded" v-if="visibilityOptions[service._id]">
                                <button class="py-1 hover:text-yellow-600 hover:transition-colors duration-300 rounded font-light">Edit</button>
                                <button class="py-1 hover:text-red-600 hover:transition-colors duration-300 rounded font-light" @click="deleteService(service._id)">Delete</button>
                            </div>

                        </div>
                    </td>
                </tr>
            </tbody>
        </table>

    </div>
</template>