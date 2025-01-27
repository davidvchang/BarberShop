<script setup lang="ts">
    import { ArrowLeft } from 'lucide-vue-next';
    import axios from "axios";
    import Swal from "sweetalert2";

    const urlUsers = import.meta.env.VITE_POST_USERS

    const handleSubmit = async () => {
        const res = await axios.post(`${urlUsers}/`)
        if(res.status === 201){
            Swal.fire({
                title: 'Saved',
                text: 'The service has been saved correctly.',
                icon: 'success',
                confirmButtonText: 'Close'
            })
        }
        else {
            Swal.fire({
                title: 'Error',
                text: 'Has been happened a error while saved the service.',
                icon: 'error',
                confirmButtonText: 'Close'
            })
        }
    }
</script>

<template>
    <div class="w-full flex items-center justify-center bg-BGPrincipal" style="height: calc(100dvh - 3.5rem);">
        <form @submit.prevent="handleSubmit">


            <div class="flex flex-col border w-[30rem] p-10 bg-white rounded-lg gap-5 shadow-md">
                <span class="text-2xl font-medium text-center">Register</span>
    
                <div class="flex gap-5">
                    <div>
                        <span class="font-medium">Name</span>
                        <input type="text" required name="name" id="name" class="mt-1 block w-full py-2 px-5 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm">
                    </div>
        
                    <div>
                        <span class="font-medium">Last Name</span>
                        <input type="text" required name="last_name" id="last_name" class="mt-1 block w-full py-2 px-5 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm">
                    </div>
    
                </div>
    
                <div class="flex gap-5">
                    <div class="w-fit">
                        <span>Code Country</span>
                        <div class="flex gap-2 items-center w-fit">
                            <span class="text-2xl font-medium">+</span>
                            <input type="number" required name="code_country" id="code_country" class="mt-1 block w-24 py-2 px-5 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm">
                        </div>
                    </div>
                    <div class="w-full">
                        <span>Phone Number</span>
                        <input type="text" required name="phone_number" id="phone_number" class="mt-1 block w-full py-2 px-5 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm">
                    </div>
                </div>
    
                <div>
                    <span>Email</span>
                    <input type="email" required name="email" id="email" class="mt-1 block w-full py-2 px-5 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm">
                </div>
    
                <div class="flex gap-5">
                    <div>
                        <span>Password</span>
                        <input type="password" required name="password" id="password" class="mt-1 block w-full py-2 px-5 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm">
                    </div>
        
                    <div>
                        <span>Confirm Password</span>
                        <input type="password" required name="confirm_password" id="confirm_password" class="mt-1 block w-full py-2 px-5 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm">
                    </div>
    
                </div>
    
    
                <div class="w-full flex gap-5">
                    <RouterLink to="/" class="w-fit p-2 rounded-full border shadow-sm font-medium text-sm hover:bg-slate-50 hover:transition duration-300">
                        <ArrowLeft/>
                    </RouterLink>
    
                    <button 
                        type="submit" 
                        class="w-full py-2 px-4 bg-blue-500 text-white font-medium text-sm rounded-md shadow-sm hover:bg-blue-600 hover:transition duration-300"
                        >   
                        Register
                    </button>
    
                </div>
            </div>
        </form>
    </div>
</template>