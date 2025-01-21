<script setup lang="ts">
import NavMenu from './NavMenu.vue';
</script>

<template>
    <div class="absolute top-14 right-0 w-[22rem] flex flex-col bg-white border shadow-2xl p-5 rounded-lg justify-between"
        style="height: calc(100vh - 3.5rem)">
        <div class="flex flex-col">
            <NavMenu to="/" name="Dashboard"/>
            <NavMenu to="/clients" name="Clients"/>
            <NavMenu to="/services" name="Services"/>
        </div>

        <div>
            <a href="" class="p-2">Cerrar Sesion</a>
        </div>
    </div>
</template>