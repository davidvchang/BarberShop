<script setup lang="ts">
    import router from '@/router';
    import axios from 'axios';
    import Swal from 'sweetalert2';
    import { ref } from 'vue';

    const urlLogin = import.meta.env.VITE_POST_USERS

    const email = ref("");
    const password = ref("");

    const handleLogin = async () => {
        const dataLogin = {
            email: email.value,
            password: password.value
        }
        
        try {
            const res = await axios.post(`${urlLogin}/login`, dataLogin)
            console.log("res: ", res)
    
            if (res.status === 200) {
    
                Swal.fire({
                    title: "Login Successful",
                    text: "Welcome!",
                    icon: "success",
                    confirmButtonText: "OK",
                });
    
                // Redirige al usuario a la página principal o dashboard
                router.push("/dashboard");
            }
            else {
                Swal.fire({
                    title: "Error",
                    text: "Email or/and password incorrect!",
                    icon: "error",
                    confirmButtonText: "OK",
                });
            }
            
        } catch (ex) {
            console.log("HA OCURRIDO UN ERROR: ", ex)
        }

    }
</script>

<template>
    <div class="w-full flex items-center justify-center bg-BGPrincipal" style="height: calc(100dvh - 3.5rem);">
        <form @submit.prevent="handleLogin">
            <div class="flex flex-col border w-96 p-10 bg-white rounded-lg gap-5 shadow-md">
                <span class="text-2xl font-medium text-center">Login</span>
                
                <div>
                    <span class="font-medium">Email</span>
                    <input type="email" v-model="email" name="email" id="email" class="mt-1 block w-full py-2 px-5 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm">
                </div>
    
                <div>
                    <span>Password</span>
                    <input type="password" v-model="password" name="password" id="password" class="mt-1 block w-full py-2 px-5 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm">
                    <p class="text-sm">Don´t have an account? <RouterLink to="/register" class="text-blue-500 underline">Register</RouterLink></p>
                </div>
    
                <button
                    type="submit"
                    class="w-full py-2 px-4 bg-blue-500 text-white font-medium text-sm rounded-md shadow-sm hover:bg-blue-600 hover:transition duration-300"
                    >   
                    Login
                </button>
            </div>

        </form>
    </div>
</template>