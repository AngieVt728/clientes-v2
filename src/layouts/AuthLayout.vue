<script setup>
// * Importa el componente de la barra de navegación
import Navbar from "@/components/Navbar.vue";
</script>

<template>
  <!-- * Renderiza el componente de la barra de navegación -->
  <Navbar />

  <!-- * Contenido principal de la página -->
  <main>
    <!-- * Contenedor con estilo de fondo gris claro, padding y ancho mínimo -->
    <div class="bg-gray-50 pt-4 px-10 min-w-full">
      <!-- * Punto de montaje para las rutas definidas en el router -->
      <RouterView />
    </div>
  </main>
</template>
