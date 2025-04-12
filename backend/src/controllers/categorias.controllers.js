import connection from "../db/database.js"

const getCategorias = async (req,res)=>{
    try {
    const result = await connection.query("SELECT CategoriaID, CategoriaNombre, Descripcion,Imagen FROM categorias ")
    res.status(200).json({result});
    } catch (error) {
        console.error("Error 500");
    }
    
}

export const methodHTTP = {
    getCategorias
}