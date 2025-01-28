<script setup lang="ts">
    import router from '@/router';
    import axios from 'axios';
    import Swal from 'sweetalert2';
    import { ref } from 'vue';

    const urlLogin:string = import.meta.env.VITE_POST_USERS

    interface DataGetApiUser {
        _id: string,
        name: string,
        lastname: string,
        phone_number: string,
        email: string,
        type_user: string
    }

    const email = ref<string>("");
    const password = ref<string>("");
    const typeUser = ref<string>("");
    // const emailFound = ref<boolean>(false)
    // const showExistEmail = ref<boolean>(false)
    // const showCorrectPassword = ref<boolean>(false)


    // const existEmail = async () => {
    //     const encodedEmail = encodeURIComponent(email.value);
    //     const res = await axios.get(`${urlLogin}/exist/${encodedEmail}`)

    //     if (res.data.message === 'The email is available') {
    //         emailFound.value = false
    //         showExistEmail.value = true;
    //         return false;
    //     } else {
    //         emailFound.value = true
    //         showExistEmail.value = false; 
    //         return true;
    //     }
    // }

    const getTypeUser = async () => {
        const res = await axios.get(`${urlLogin}`)
        console.log("res: ", res.data)

        const userType = res.data.find((user: DataGetApiUser) => user.email === email.value)

        if(userType && userType.type_user) {
            typeUser.value = userType.type_user;
        }

        console.log(typeUser.value)
    }

    const handleLogin = async () => {
        // await existEmail();

        const dataLogin = {
            email: email.value,
            password: password.value
        }
        
        const res = await axios.post(`${urlLogin}/login`, dataLogin)

        if (res.status === 200) {
            
            localStorage.setItem('authToken', res.data.token);
            
            Swal.fire({
                title: "Login Successful",
                text: "Welcome!",
                icon: "success",
                confirmButtonText: "OK",
            });
            
            await getTypeUser()

            if(typeUser.value === "Client") {
                router.push("/clients/dashboard");
            }
            else if(typeUser.value === "Admin"){
                router.push("/dashboard");
            }

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
                    
                    <!-- <span class="text-red-500 font-medium text-center text-sm" v-if="showExistEmail">
                        Email not found
                    </span> -->
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