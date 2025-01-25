<script setup lang="ts">
    import SearchInput from '../components/SearchInput.vue'
</script>

<template>
    <div class="flex flex-col rounded-md overflow-hidden">
            <div class="bg-white py-5 px-7 border rounded-md flex justify-between items-center">
                <div class="flex gap-5 items-center">
                    <span class="text-lg font-medium ">Today´s Appointments</span>
                    <SearchInput/>
                </div>
            </div>
            <table class="w-full border-collapse">
                <thead class="bg-BGPrincipal">
                    <tr class="border">
                        <th class="font-medium text-gray-500 py-3 pl-7 text-left text-xs w-1/4">NAME CLIENT</th>
                        <th class="font-medium text-gray-500 py-3 text-left text-xs w-1/4">SERVICE</th>
                        <th class="font-medium text-gray-500 py-3 text-left text-xs w-1/4">TIME</th>
                        <th class="font-medium text-gray-500 py-3 text-left text-xs w-1/4">STATUS</th>
                    </tr>
                </thead>
                <tbody class="bg-white w-full">
                    <tr class="border">
                        <td class="py-4 pl-7 text-sm w-1/4">Juan</td>
                        <td class="py-4 text-sm w-1/4">HairCut</td>
                        <td class="py-4 text-sm w-1/4">10:00 AM</td>
                        <td class="py-4 text-xs w-1/4">
                          <div class="bg-green-200 w-fit px-2 rounded-lg text-green-800 font-medium">Confirmada</div>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
</template>