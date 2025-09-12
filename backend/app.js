// El archivo de ejecución de nuestra applicación
// configurar nuestro servidor y gestionar la lógica de negocio

// 1. Importar las dependencias y modulos necesarios 
import express from "express";
import dotenv from "dotenv";
import { conexionMongo } from "./src/config/db.js";
import { productRouter } from "./src/routes/products.routes.js";
import { userRouter } from "./src/routes/users.routes.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

// 2. configurar las dependencias que necesitemos
const app = express();
dotenv.config();
const port = process.env.PORT;
conexionMongo(); //esto es lo que hace la conexión con db
const _filename = fileURLToPath(import.meta.url); //_filename = backend/app.js
const _dirname = path.dirname(_filename);//_dirname = backend

// 3. funcionalidades que necesite agregar
app.get("/",(request,response)=>{
 response.send("Server works!")
});

app.use(cors()); //habilita CORS
app.use(express.json()); //es para usar formato json
app.use("/products", productRouter);
app.use("/users", userRouter);
app.use("/uploads", express.static(path.join(_dirname, "src/uploads")));


// 4. levantar el servidor //3000, 9000
app.listen(port, ()=>{
  console.log(`El servidor está ejecutándose en http://localhost:${port}`)
});