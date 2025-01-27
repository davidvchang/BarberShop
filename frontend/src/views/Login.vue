<template>
    <div class="w-full flex items-center justify-center bg-BGPrincipal" style="height: calc(100dvh - 3.5rem);">
        <div class="flex flex-col border w-96 p-10 bg-white rounded-lg gap-5 shadow-md">
            <span class="text-2xl font-medium text-center">Login</span>
            <div>
                <span class="font-medium">Email</span>
                <input type="email" name="email" id="email" class="mt-1 block w-full py-2 px-5 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm">
            </div>

            <div>
                <span>Password</span>
                <input type="password" name="password" id="password" class="mt-1 block w-full py-2 px-5 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm">
                <p class="text-sm">Don´t you have an account? <a href="" class="text-blue-500 font-medium underline">Sign in</a></p>
            </div>

            <button 
                type="submit" 
                class="w-full py-2 px-4 bg-blue-500 text-white font-medium text-sm rounded-md shadow-sm hover:bg-blue-600 hover:transition duration-300"
                >   
                Login
                </button>
        </div>
    </div>
</template>