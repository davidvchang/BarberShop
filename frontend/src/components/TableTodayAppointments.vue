
<template>
    <div class="flex flex-col rounded-md overflow-hidden">
        <table class="w-full border-collapse">
            <span class="text-lg font-medium pb-5 bg-white py-5 px-7 border rounded-md">Today's Appointments</span>
            <thead class="bg-BGPrincipal w-full">
                <tr class="border">
                    <th class="font-medium text-gray-500 py-3 pl-7 text-left text-xs">CLIENT</th>
                    <th class="font-medium text-gray-500 py-3 text-left text-xs">SERVICE</th>
                    <th class="font-medium text-gray-500 py-3 text-left text-xs">TIME</th>
                    <th class="font-medium text-gray-500 py-3 text-left text-xs">STATUS</th>
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