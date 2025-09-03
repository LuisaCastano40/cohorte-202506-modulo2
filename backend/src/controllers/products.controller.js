// 1. importar dependencias y módulos necesarios
import { productModel } from "../models/products.model.js";


// Definir las acciones que van a realizar - CRUD

// 1. Método para CREAR un producto -> POST
export const postProduct = (request, response) => {
    //acá va la lógica de la peticion
    return response.json({ "mensaje": "Funciona petición POST" });
}

// 2. Método para MOSTRAR todos los productos -> GET
export const getAllProducts = (request, response) => {
    return response.json({ "mensaje": "Funciona petición GET" });
}

// 3. Método para ACTUALIZAR un producto -> PUT
export const putProductById = (request, response) => {
    return response.json({ "mensaje": "Funciona petición PUT" });
}

// 4. Método para ELIMINAR un producto -> DELETE
export const deleteProductById = (request, response) => {
    return response.json({ "mensaje": "Funciona petición DELETE" });
}