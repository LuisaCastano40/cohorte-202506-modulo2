// El archivo de ejecución de nuestra applicación
// configurar nuestro servidor y gestionar la lógica de negocio

// 1. Importar las dependencias necesarias
import express from "express";



// 2. configurar las dependencias que necesitemos
const app = express();
const port = 3000;


// 3. funcionalidades que necesite agregar
app.get("/",(req,res)=>{
 res.send("Server works!")
});


// 4. levantar el servidor //3000, 9000
app.listen(port, ()=>{
  console.log(`El servidor está ejecutándose en http://localhost:${port}`)
});