import "@/assets/style.css";
import "../node_modules/flowbite-vue/dist/index.css";

// Importa las dependencias de Vue y Vue Router
import { createPinia } from "pinia";
import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

// Importa los iconos de Font Awesome para OhVueIcon
import { OhVueIcon, addIcons } from "oh-vue-icons";
import * as FaIcons from "oh-vue-icons/icons/fa";

// Crea una instancia de la aplicación Vue
const app = createApp(App);

// Añade los iconos de Font Awesome a OhVueIcon
const Fa = Object.values({ ...FaIcons });
addIcons(...Fa);

// Usa Pinia para la gestión del estado
app.use(createPinia());

// Usa Vue Router para la navegación
app.use(router);

// Registra el componente OhVueIcon globalmente
app.component("v-icon", OhVueIcon);

// Monta la aplicación en el elemento #app en el DOM
app.mount("#app");
