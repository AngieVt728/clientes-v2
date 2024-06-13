import axios from "axios";

// * Crear una instancia de axios con configuración personalizada
const instance = axios.create({
  // ! Base URL de la API que se obtiene de las variables de entorno
  baseURL: import.meta.env.VITE_API_BASEURL,
});

// * Exportar la instancia de axios para ser utilizada en otros módulos
export default instance;
