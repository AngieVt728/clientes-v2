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
    <div class="bg-purple-300 pt-4 px-10 min-w-full container">
      <!-- * Punto de montaje para las rutas definidas en el router -->
      <RouterView />
    </div>
  </main>
</template>

<style>
body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.container {
    margin: 20px; /* Añade margen para separar el contenedor de los bordes */
    padding: 20px; /* Añade relleno dentro del contenedor */
    border: 1px solid #ccc; /* Añade un borde alrededor del contenedor */
    border-radius: 10px; /* Opcional: redondea las esquinas del borde */
    background-color: #f9f9f9; /* Cambia el color de fondo del contenedor */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Añade una sombra para un mejor efecto visual */
}
</style>
