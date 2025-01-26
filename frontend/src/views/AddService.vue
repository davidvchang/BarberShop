<script setup lang="ts">
    import axios from "axios";
    import Swal from "sweetalert2";
    import { reactive, watch} from "vue";

    const urlAPI: string = import.meta.env.VITE_POST_SERVICE;

    const props = defineProps<{
        closeModal: () => void,
        serviceToEdit?: DataForm
    }>()

    interface DataForm{
        name: string,
        price: number | null,
        description: string
    }
    
    const formData = reactive<DataForm>({
        name: "",
        price: null,
        description: ""
    });

    const handleSubmit = async () => {
        if (props.serviceToEdit) {
            const res = await axios.put(`${urlAPI}/${props.serviceToEdit._id}`, formData)
            if(res.status === 200){
                Swal.fire({
                    title: 'Updated',
                    text: 'The service has been updated correctly.',
                    icon: 'success',
                    confirmButtonText: 'Close'
                })
                props.closeModal()
            }
            else {
                Swal.fire({
                    title: 'Error',
                    text: 'Has been happened a error while updated the service.',
                    icon: 'error',
                    confirmButtonText: 'Close'
                })
            }
            props.closeModal()
        }
        else {
            const res = await axios.post(urlAPI, formData)
            if(res.status === 201){
                Swal.fire({
                    title: 'Saved',
                    text: 'The service has been saved correctly.',
                    icon: 'success',
                    confirmButtonText: 'Close'
                })
                props.closeModal()
            }
            else {
                Swal.fire({
                    title: 'Error',
                    text: 'Has been happened a error while saved the service.',
                    icon: 'error',
                    confirmButtonText: 'Close'
                })
            }
            props.closeModal()
        }
    }

    watch(() => props.serviceToEdit, (newValue) => {
        if (newValue) {
            formData.name = newValue.name;
            formData.price = newValue.price;
            formData.description = newValue.description;
        } else {
            formData.name = "";
            formData.price = null;
            formData.description = "";
        }
    }, { immediate: true });

</script>

<template>
    <div class="w-96 absolute top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2 bg-white p-5 border shadow-lg rounded-xl">
        <form class="space-y-4" @submit.prevent="handleSubmit">
            <span class="text-2xl font-medium flex text-center w-full justify-center">{{props.serviceToEdit ? "Update Service" : "Add Service" }}</span>
            
            <div>
                <label for="service-name" class="block text-sm font-medium text-gray-700">Service Name</label>
                <input 
                type="text" 
                id="service-name" 
                v-model="formData.name"
                class="mt-1 block w-full py-2 px-5 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm"
                placeholder="Enter service name"
                />
            </div>

            <div>
                <label for="price" class="block text-sm font-medium text-gray-700">Price</label>
                <input 
                type="number" 
                id="price" 
                v-model="formData.price"
                step="any"
                class="mt-1 block w-full py-2 px-5 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm"
                placeholder="Enter price"
                />
            </div>

            <div>
                <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
                <textarea 
                id="description" 
                rows="4"
                v-model="formData.description"
                class="mt-1 block w-full py-2 px-5 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm"
                placeholder="Enter service description"
                ></textarea>
            </div>

            <div class="flex gap-10">
                <button 
                type="submit" 
                @click="closeModal"
                class="w-full py-2 px-4 bg-red-500 text-white font-medium text-sm rounded-md shadow-sm hover:bg-red-600 hover:transition-colors duration-300"
                >
                Cancel
                </button>
                <button 
                type="submit" 
                class="w-full py-2 px-4 bg-blue-500 text-white font-medium text-sm rounded-md shadow-sm hover:bg-blue-600 hover:transition duration-300"
                >   
                Guardar
                </button>
            </div>
        </form>
    </div>
</template>