<script setup lang="ts">
import { LayoutDashboard, Users, Scissors, Settings, LogOut } from 'lucide-vue-next';
import NavMenu from './NavMenu.vue';
import router from '@/router';

const handleLogout = () => {
    localStorage.removeItem('authToken');
    // sessionStorage.removeItem('token');
    router.push('/');
};
</script>

<template>
    <div class="absolute top-14 right-0 w-[22rem] z-50 flex flex-col bg-white border shadow-2xl p-5 rounded-lg justify-between"
        style="height: calc(100vh - 3.5rem)">

        <div class="flex flex-col gap-10">
            <div class="flex gap-3 border-b pb-5 items-center">
                <!-- PROFILE PHOTO -->
                <div class="min-w-12 h-12 rounded-full bg-slate-500">
    
                </div>
    
                <div class="flex flex-col">
                    <span class="text-xl font-semibold">David Valenzuela</span>
                    <span class="text-sm text-gray-500 font-light">dvalenzuelachang@gmail.com</span>
                </div>
            </div>
            <div class="flex flex-col gap-2">
                <NavMenu to="/" name="Dashboard" :icon="LayoutDashboard"/>
                <NavMenu to="/clients" name="Clients" :icon="Users"/>
                <NavMenu to="/services" name="Services" :icon="Scissors"/>
                <NavMenu to="/settings" name="Settings" :icon="Settings"/>
            </div>
        </div>


        <div>
            <button class=" py-3 p-5 rounded-lg flex items-center gap-3 hover:bg-[#f03b3b] hover:text-white hover:transition duration-300 w-full" @click="handleLogout">
                <LogOut class="w-6 h-6"/>
                Log Out
            </button>
        </div>
    </div>
</template>