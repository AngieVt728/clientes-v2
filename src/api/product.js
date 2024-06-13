import axios from "@/api/axios"; // * Importa la instancia de axios configurada desde el archivo de configuración

// * Función para realizar una solicitud GET a la ruta "/products" y obtener la lista de productos
export const getProductsRequest = () => axios.get("/products");
