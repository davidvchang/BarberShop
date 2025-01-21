<script setup lang="ts">
    import type { Component } from 'vue';
// import BtnAdd from '../components/BtnAdd.vue'

    defineProps<{
        title: string,
        // text_button: string,
        nameColumn1: string,
        nameColumn2: string,
        nameColumn3: string,
        nameColumn4: string,
        btn_add?: Component,
        btn_add_props?: Record<string, unknown>
    }>()
</script>

<template>
    <div class="flex flex-col rounded-md overflow-hidden">
        <div class="bg-white py-5 px-7 border rounded-md flex justify-between items-center">
            <span class="text-lg font-medium ">{{ title }}</span>
            <!-- <BtnAdd :text="text_button"/> -->
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
                <tr class="border">
                    <td class="py-4 pl-7 text-sm">David Valenzuela</td>
                    <td class="py-4 text-sm">Haircut</td>
                    <td class="py-4 text-sm">03:00 PM</td>
                    <td class="py-4 text-sm">
                        <div class="py-0 px-2 bg-[#b8f0cc] w-min rounded-2xl">
                            <span class="text-xs text-green-800 font-semibold">Confirmed</span>
                        </div>
                    </td>
                </tr>
                <tr class="border">
                    <td class="py-4 pl-7 text-sm">Rogelio Luna</td>
                    <td class="py-4 text-sm">Haircut</td>
                    <td class="py-4 text-sm">02:00 PM</td>
                    <td class="py-4 text-sm">
                        <div class="py-0 px-2 bg-[#ffc1c1] w-min rounded-2xl">
                            <span class="text-xs text-red-800 font-semibold">Canceled</span>
                        </div>
                    </td>
                </tr>
                <tr class="border">
                    <td class="py-4 pl-7 text-sm">Daniel Gaxiola</td>
                    <td class="py-4 text-sm">Haircut</td>
                    <td class="py-4 text-sm">01:00 PM</td>
                    <td class="py-4 text-sm">
                        <div class="py-0 px-2 bg-[#b8f0cc] w-min rounded-2xl">
                            <span class="text-xs text-green-800 font-semibold">Confirmed</span>
                        </div>
                    </td>
                </tr>
                <tr class="border">
                    <td class="py-4 pl-7 text-sm">Roger Jhonson</td>
                    <td class="py-4 text-sm">Haircut</td>
                    <td class="py-4 text-sm">12:00 PM</td>
                    <td class="py-4 text-sm">
                        <div class="py-0 px-2 bg-[#b8f0cc] w-min rounded-2xl">
                            <span class="text-xs text-green-800 font-semibold">Confirmed</span>
                        </div>
                    </td>
                </tr>
                <tr class="border">
                    <td class="py-4 pl-7 text-sm">Tomas Salazar</td>
                    <td class="py-4 text-sm">Haircut</td>
                    <td class="py-4 text-sm">11:00 AM</td>
                    <td class="py-4 text-sm">
                        <div class="py-0 px-2 bg-[#b8f0cc] w-min rounded-2xl">
                            <span class="text-xs text-green-800 font-semibold">Confirmed</span>
                        </div>
                    </td>
                </tr>
                <tr class="border">
                    <td class="py-4 pl-7 text-sm">Kevin Ortiz</td>
                    <td class="py-4 text-sm">Haircut</td>
                    <td class="py-4 text-sm">10:00 AM</td>
                    <td class="py-4 text-sm">
                        <div class="py-0 px-2 bg-[#b8f0cc] w-min rounded-2xl">
                            <span class="text-xs text-green-800 font-semibold">Confirmed</span>
                        </div>
                    </td>
                </tr>
                
            </tbody>
        </table>

    </div>
</template>