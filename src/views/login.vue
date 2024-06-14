<template>
    <div class="flex items-center justify-center bg-gradient-to-br from-purple-300 via-indigo-400 to-purple-300 h-screen px-6">
      <div class="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <div class="grid grid-cols-2 gap-4">
          <div class="col-span-1 flex flex-col items-center justify-center">
            <br>
            <h1 class="text-5xl text-center mb-4">Bienvenido</h1>
            <img src="../public/images/imbae.png" alt="Logo" class="w-48 h-48 mb-4">
          </div>
          <div class="col-span-1 flex flex-col items-center justify-center">
            <h2 class="text-3xl mb-2 text-black">Inicio de sesión</h2>
            <p class="mb-4 text-black">Por favor ingresa tus credenciales:</p>
            <div class="mb-4 relative">
              <input type="email" placeholder="Correo electrónico" class="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300">
            </div>
            <div class="mb-4 relative">
              <input :type="showPassword ? 'text' : 'password'" placeholder="Contraseña" class="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300">
              <span class="absolute inset-y-0 right-0 pr-3 flex items-center">
                <svg class="h-6 w-6 text-gray-400 cursor-pointer" fill="none" @click="showPassword = !showPassword" viewBox="0 0 24 24" stroke="currentColor">
                  <path v-if="showPassword" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a4 4 0 10-5.072 5.072M4.343 8.343a8 8 0 0111.314 11.314l-.343.343h-.001a8 8 0 01-11.314-11.314l.343-.343z"></path>
                  <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 14l-2-2m0 0l-2-2m2 2l2-2m-2 2l2 2"></path>
                </svg>
              </span>
            </div>
            <button class="w-auto bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md mt-4">Iniciar sesión</button>
        <br>
        <br>  
        </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showPassword: false
      };
    }
  };
  </script>
  
  <style scoped>
  /* Estilos personalizados pueden ser agregados aquí */
  </style>
  