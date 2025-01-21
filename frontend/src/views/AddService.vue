<script setup lang="ts">

defineProps<{
    closeModal: () => void
}>()
</script>

<template>
    <div class="w-96 absolute top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2 bg-white p-5 border shadow-lg rounded-xl">
        <form class="space-y-4">
            <span class="text-2xl font-medium flex text-center w-full justify-center">Add Service</span>
            
            <div>
                <label for="service-name" class="block text-sm font-medium text-gray-700">Service Name</label>
                <input 
                type="text" 
                id="service-name" 
                class="mt-1 block w-full py-2 px-5 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm"
                placeholder="Enter service name"
                />
            </div>

            <div>
                <label for="price" class="block text-sm font-medium text-gray-700">Price</label>
                <input 
                type="number" 
                id="price" 
                class="mt-1 block w-full py-2 px-5 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm"
                placeholder="Enter price"
                />
            </div>

            <div>
                <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
                <textarea 
                id="description" 
                rows="4"
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
                Add Service
                </button>
            </div>
        </form>
    </div>
</template>