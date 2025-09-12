// src/config/multer.js
// Configuración simple de multer para almacenar archivos en /uploads
import multer from "multer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

// Resolver __dirname en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Carpeta pública donde se guardarán los archivos subidos (en la raíz del proyecto)
const UPLOADS_FOLDER = path.join(__dirname, "../uploads");

// Crear la carpeta uploads si no existe
if (!fs.existsSync(UPLOADS_FOLDER)) {
  fs.mkdirSync(UPLOADS_FOLDER, { recursive: true });
}

// Storage en disco: dónde y cómo nombrar el archivo
const storage = multer.diskStorage({
  //¿a qué carpeta guardar el archivo?
  destination: (req, file, cb) => {
    cb(null, UPLOADS_FOLDER);
  },
  //¿qué nombre ponerle al archivo?
  filename: (req, file, cb) => {
    // Mantener extensión original, normalizar espacios en el nombre
    const ext = path.extname(file.originalname);
    const base = path.basename(file.originalname, ext).replace(/\s+/g, "_");
    cb(null, `${base}-${Date.now()}${ext}`);
  },
});

// Filtro de archivos: ejemplo simple que permite solo imágenes
function fileFilter(req, file, cb) {
  const allowed = ["image/jpeg", "image/png", "image/webp", "image/gif"];
  //mimetype:identificador estándar que describe el tipo de contenido de un archivo
  if (allowed.includes(file.mimetype)) {
    cb(null, true);
    //cb(null, true) -> si el archivo es permitido, se guarda en la carpeta uploads
  } else {
    cb(new Error("Tipo de archivo no permitido. Solo imágenes."), false);
  }
}

// Límites opcionales (ej: 5 MB)
const limits = {
  fileSize: 5 * 1024 * 1024,
};

// Exportar el middleware de multer
export const upload = multer({ storage, fileFilter, limits });
