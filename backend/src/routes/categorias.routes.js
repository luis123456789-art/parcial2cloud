//importamos Router de  express y el controlador 
import { Router } from "express";
import { methodHTTP as categoriaController } from "../controllers/categorias.controllers.js";

//Almacenar todo el poder de Router en router
const router= Router();

//get gestion de las respuestas desde serve
router.get("/",categoriaController.getCategorias) /* para crud - read*/
router.post("/",categoriaController.postCategorias) /* para crud - create */
/* Ruta que recibe un parametro */
router.get("/:id",categoriaController.getCategory) /* para crud - read 1 sola fila */

/* Ruta que recibe parametro id de categoria a borrar */
router.delete("/:id",categoriaController.deleteCategory) /* para crud - delete 1 sola fila */

/*Ruta que recibe como parametro tanto el cuerpo del id a actualizar */
router.put("/:id",categoriaController.updateCategorias) /* para crud - delete 1 sola fila */

//exportamos para que sea disponible en api
export default router;