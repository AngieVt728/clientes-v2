<script setup>
import { FwbCarousel, FwbCard } from "flowbite-vue";
import {
  FwbFooter,
  FwbFooterBrand,
  FwbFooterLink,
  FwbFooterLinkGroup,
  FwbFooterCopyright
} from "flowbite-vue";
import { ref, watch } from "vue";
import { getProductsRequest } from "@/api/product"; 
import { FwbTab, FwbTabs } from "flowbite-vue";
import { onMounted } from "vue";

// Crea una referencia reactiva para almacenar los productos
const products = ref([]);

// Función que se ejecuta cuando el componente se monta
onMounted(async () => {
  try {
    // Realiza la petición para obtener los productos
    const res = await getProductsRequest();
    // Almacena los datos de los productos en la referencia reactiva
    products.value = res.data;
    console.log(products.value); // Muestra los productos en la consola para verificación
  } catch (error) {
    console.log(error); // Maneja errores en la petición
  }
});

// Construir la lista de imágenes para el carrusel a partir de la lista de productos
const pictures = ref([]);

// Observa cambios en la lista de productos y actualiza la lista de imágenes
watch(products, () => {
  pictures.value = products.value.map(product => ({ src: product.image, alt: product.name }));
});
</script>

<template>
  <h2>Aqui se visualizan las fotos de los productos</h2>
  <fwb-carousel :pictures="pictures" slide class="custom-carousel">
    <template #indicator="{ active, index }">
      <button
        :class="['indicator', { active }]"
        aria-label="Slide indicator"
      ></button>
    </template>
  </fwb-carousel>

  <h2>Aqui se visualiza la info de los productos</h2>
  <fwb-tabs v-model="activeTab" class="p-5">
    <fwb-tab name="first" title="First"> 1 Lorem ipsum dolor... </fwb-tab>
    <fwb-tab name="second" title="Second"> 2 Lorem ipsum dolor... </fwb-tab>
    <fwb-tab name="third" title="Third"> 3 Lorem ipsum dolor... </fwb-tab>
    <fwb-tab name="fourth" title="Fourth"> 4 Lorem ipsum dolor... </fwb-tab>
  </fwb-tabs>

  <fwb-footer footer-type="logo">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div class="sm:flex sm:items-center sm:justify-between">
        <fwb-footer-brand
          href="https://flowbite.com"
          alt="Flowbite Logo"
          name="Flowbite"
        />
        <fwb-footer-link-group
          class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400"
        >
          <fwb-footer-link href="/"> About </fwb-footer-link>
          <fwb-footer-link href="/"> Privacy Policy </fwb-footer-link>
          <fwb-footer-link href="/"> Licensing </fwb-footer-link>
          <fwb-footer-link href="/"> Contact </fwb-footer-link>
        </fwb-footer-link-group>
      </div>
      <hr
        class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
      />
      <fwb-footer-copyright href="/" by="Flowbite™" />
    </div>
  </fwb-footer>
</template>
