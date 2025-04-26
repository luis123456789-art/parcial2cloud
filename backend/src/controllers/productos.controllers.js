import getConnection from "../db/database.js";

const getProductos = async (req, res) => {
    try {
        const connection = await getConnection();
        const [rows] = await connection.query(
            "SELECT ProductoID, productoNombre, proveedorID, CategoriaID, CantidadPorUnidad, PrecioUnitario, UnidadesStock, UnidadesPedidas, NivelReorden, Discontinuado FROM productos"
        );
        res.status(200).json(rows);
    } catch (error) {
        console.error("Error al obtener producto:", error.message);
        res.status(500).json({
            message: "Error interno del servidor al obtener los producto",
            error: error.message
        });
    }
}

const updateProductos = async (req, res) => {
    try {
        const{id} = req.params
        const{productoNombre, proveedorID, CategoriaID, CantidadPorUnidad, PrecioUnitario, UnidadesStock, UnidadesPedidas, NivelReorden, Discontinuado } =  req.body;

        const producto = {productoNombre, proveedorID, CategoriaID, CantidadPorUnidad, PrecioUnitario, UnidadesStock, UnidadesPedidas, NivelReorden, Discontinuado }
        
        const connection = await getConnection();

        const result = await connection.query("UPDATE productos SET ? WHERE ProductoID = ?", [producto, id] )

        res.json(result)
    } catch (error) {
        console.error("Error al obtener productos:", error.message); 
    }
}

export const methodProductos = {
    updateProductos,
    getProductos
};