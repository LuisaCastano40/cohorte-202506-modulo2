import { verifyToken } from "../config/jwt.js";

export const auth = (requiredRole) => {
    return async(request,response, next ) => {
        // Lógíca de validación
    }
}