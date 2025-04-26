import getConnection from "../db/database.js";

    const getCategorias = async (req, res) => {
        try {
            const connection = await getConnection();
            const [rows] = await connection.query(
                "SELECT CategoriaID, CategoriaNombre, Descripcion, Imagen FROM categorias"
            );
            res.status(200).json(rows);
        } catch (error) {
            console.error("Error al obtener categorías:", error.message);
            res.status(500).json({
                message: "Error interno del servidor al obtener las categorías",
                error: error.message
            });
        }
    };

    const postCategorias = async (req, res) => {
        try {
            const {CategoriaNombre, Descripcion, Imagen} = req.body;
            const category = {
                CategoriaNombre, Descripcion, Imagen
            }
            const connection = await getConnection();
    
            const result = await connection.query("INSERT INTO categorias SET ?", category);
            res.json(result)
        } catch (error) {
            console.error("Error al crear la categoria:", error.message);
            res.status(500).json({
                mensaje: "Hubo un error al crear la categoria",
                error: error.message
            });
        }
    }

const getCategory = async (req, res) => {
    try {
        console.log(req.param);
        const {id} = req.params
        const connection = await getConnection();
        const [result] = await connection.query("SELECT CategoriaID, CategoriaNombre, Descripcion, Imagen FROM categorias WHERE CategoriaID = ?",id)
        res.json(result);
    } catch (error) {
        console.error("Error al obtener categorías:", error.message);
        res.status(500).json({
            message: "Error interno del servidor al obtener las categorías",
            error: error.message
        });
    }
};

const deleteCategory = async (req, res) => {
    try {
        console.log("id de cateogria a borrar: ", req.param);
        const {id} = req.params
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM categorias WHERE CategoriaID = ?",id)
        res.status(200).json(result);
    } catch (error) {
        console.error("Error al obtener categorías:", error.message);
        res.status(500).json({
            message: "Error interno del servidor al obtener las categorías",
            error: error.message
        });
    }
};

const updateCategorias = async (req, res) => {
    try {
        const{id} = req.params
        const{CategoriaNombre, Descripcion, Imagen} =  req.body;

        const category = {CategoriaNombre, Descripcion, Imagen}
        
        const connection = await getConnection();

        const result = await connection.query("UPDATE categorias SET ? WHERE CategoriaID = ?", [category, id] )

        res.json(result)
    } catch (error) {
        console.error("Error al obtener categorías:", error.message); 
    }
}
export const methodHTTP = {
    getCategorias,
    postCategorias,
    getCategory,
    deleteCategory,
    updateCategorias
};