<script setup lang="ts">
    import SearchInput from '../components/SearchInput.vue'
</script>

<template>
    <div class="flex flex-col rounded-md overflow-hidden">
            <div class="bg-white py-5 px-7 border rounded-md flex justify-between items-center">
                <div class="flex gap-5 items-center">
                    <span class="text-lg font-medium ">Clients</span>
                    <SearchInput/>
                </div>
            </div>
            <table class="w-full border-collapse">
                <thead class="bg-BGPrincipal">
                    <tr class="border">
                        <th class="font-medium text-gray-500 py-3 pl-7 text-left text-xs w-1/4">NAME</th>
                        <th class="font-medium text-gray-500 py-3 text-left text-xs w-1/4">EMAIL</th>
                        <th class="font-medium text-gray-500 py-3 text-left text-xs w-1/4">PHONE NUMBER</th>
                        <th class="font-medium text-gray-500 py-3 text-left text-xs w-1/4">TOTAL VISITS</th>
                    </tr>
                </thead>
                <tbody class="bg-white w-full">
                    <tr class="border">
                        <td class="py-4 pl-7 text-sm w-1/4">Juan Agustin</td>
                        <td class="py-4 text-sm w-1/4">hagustin@gmail.com</td>
                        <td class="py-4 text-sm w-1/4">5445310998</td>
                        <td class="py-4 text-xs w-1/4">4</td>
                    </tr>
                </tbody>
            </table>

        </div>
</template>