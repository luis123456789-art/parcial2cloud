import getConection from "../db/database.js"

const getCategorias = async (req,res)=>{
    try {
        const conenection = await getConection();
    const result = await conenection.query("SELECT CategoriaID, CategoriaNombre, Descripcion,Imagen FROM categorias ")
    res.json(result);
    } catch (error) {
        console.error("Error 500");
    }
    
}

export const methodHTTP = {
    getCategorias
}