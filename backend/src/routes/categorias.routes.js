//importamos Router de  express y el controlador 
import { Router } from "express";
import { methodHTTP as categoriaController } from "../controllers/categorias.controllers.js";

//Almacenar todo el poder de Router en router
const router= Router();

//get gestion de las respuestas desde serve
router.get("/",categoriaController.getCategorias)


//exportamos para que sea disponible en api
export default router;