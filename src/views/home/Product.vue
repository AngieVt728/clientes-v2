<script setup>
import { getProductsRequest } from "@/api/product"; // * Importa la función para obtener productos de la API
import { FwbCard } from "flowbite-vue"; // * Importa el componente de tarjeta de Flowbite Vue
import { onMounted, ref } from "vue"; // * Importa las funciones onMounted y ref de Vue

// * Crea una referencia reactiva para almacenar los productos
const products = ref([]);

// * Función que se ejecuta cuando el componente se monta
onMounted(async () => {
  try {
    // * Realiza la petición para obtener los productos
    const res = await getProductsRequest();
    // * Almacena los datos de los productos en la referencia reactiva
    products.value = res.data;
    console.log(products.value); // * Muestra los productos en la consola para verificación
  } catch (error) {
    console.log(error); // ! Maneja errores en la petición
  }
});
</script>

<template>
  <!-- * Contenedor principal que distribuye los elementos flexiblemente -->
  <div class="flex flex-wrap justify-between items-center">
    <!-- * Itera sobre cada producto en la lista de productos -->
    <div v-for="product in products" :key="product.id">
      <!-- * Renderiza una tarjeta para cada producto -->
      <fwb-card img-alt="Desk" :img-src="product.image" variant="horizontal">
        <div class="p-5">
          <!-- * Título del producto -->
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            {{ product.name }}
          </h5>
          <!-- * Descripción del producto -->
          <p class="font-normal text-gray-700 dark:text-gray-400">
            {{ product.description }}
          </p>
        </div>
      </fwb-card>
    </div>
  </div>
</template>
