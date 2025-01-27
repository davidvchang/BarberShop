<script setup lang="ts">
    import { ArrowLeft } from 'lucide-vue-next';
    import axios from "axios";
    import Swal from "sweetalert2";
    import { reactive, ref} from "vue";

    const urlUsers = import.meta.env.VITE_POST_USERS

    const marchPasswords = ref<boolean>(true)
    const showPasswordError = ref<boolean>(false)

    interface DataUser {
        name: string,
        lastname: string,
        code_country: string,
        phone_number: string,
        email: string,
        password: string,
        confirm_password: string,
        type_user: string
    }

    const formData = reactive<DataUser>({
        name: "",
        lastname: "",
        code_country: "",
        phone_number: "",
        email: "",
        password: "",
        confirm_password: "",
        type_user: "Client"
    });

    const cleanInputs = () => {
        formData.name = ""
        formData.lastname = ""
        formData.phone_number = ""
        formData.code_country = ""
        formData.email = ""
        formData.password = ""
        formData.confirm_password = ""
    }

    const verificationPasswords = () => {
        if(formData.password !== formData.confirm_password)
        {
            marchPasswords.value = false
        }
        else {
            marchPasswords.value = true
        }
    }

    const handleSubmitUser = async () => {
        verificationPasswords()
        showPasswordError.value = !marchPasswords.value;

        
        if(marchPasswords.value) {
            
            formData.phone_number = "+" + formData.code_country + formData.phone_number

            const res = await axios.post(`${urlUsers}/`, formData)
    
            if(res.status === 201){
                Swal.fire({
                    title: 'Saved',
                    text: 'The user has been saved correctly.',
                    icon: 'success',
                    confirmButtonText: 'Close'
                })
                cleanInputs()
            }
            else {
                Swal.fire({
                    title: 'Error',
                    text: 'Has been happened a error while saved the user.',
                    icon: 'error',
                    confirmButtonText: 'Close'
                })
            }
        }
    }
</script>

<template>
    <div class="w-full min-h-screen flex items-center justify-center bg-BGPrincipal">
        <form @submit.prevent="handleSubmitUser">
            <div class="flex flex-col border w-[30rem] p-10 bg-white rounded-lg gap-5 shadow-md">
                <span class="text-2xl font-medium text-center">Register</span>
    
                <div class="flex gap-5">
                    <div>
                        <span class="font-medium">Name</span>
                        <input type="text" v-model="formData.name" required name="name" id="name" class="mt-1 block w-full py-2 px-5 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm">
                    </div>
        
                    <div>
                        <span class="font-medium">Last Name</span>
                        <input type="text" v-model="formData.lastname" required name="last_name" id="last_name" class="mt-1 block w-full py-2 px-5 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm">
                    </div>
    
                </div>
    
                <div class="flex gap-5">
                    <div class="w-fit">
                        <span>Code Country</span>
                        <div class="flex gap-2 items-center w-fit">
                            <span class="text-2xl font-medium">+</span>
                            <input type="number" min="1" v-model="formData.code_country" name="code_country" id="code_country" class="mt-1 block w-24 py-2 px-5 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm">
                        </div>
                    </div>
                    <div class="w-full">
                        <span>Phone Number</span>
                        <input type="text" v-model="formData.phone_number" name="phone_number" id="phone_number" class="mt-1 block w-full py-2 px-5 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm">
                    </div>
                </div>
    
                <div>
                    <span>Email</span>
                    <input type="email" v-model="formData.email" required name="email" id="email" class="mt-1 block w-full py-2 px-5 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm">
                </div>

                <div class="flex flex-col gap-1">
                    <div class="flex gap-5">
                        <div>
                            <span>Password</span>
                            <input type="password" v-model="formData.password" required name="password" id="password" class="mt-1 block w-full py-2 px-5 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm">
                        </div>
            
                        <div>
                            <span>Confirm Password</span>
                            <input type="password" v-model="formData.confirm_password" required name="confirm_password" id="confirm_password" class="mt-1 block w-full py-2 px-5 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm">
                        </div>
                    </div>
    
                    <span class="text-red-500 font-medium text-center" v-if="showPasswordError">
                        Passwords do not match
                    </span>
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