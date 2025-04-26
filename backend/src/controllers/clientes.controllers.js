import getConnection from "../db/database.js";

const getClientes = async (req, res) => {
    try {
        const connection = await getConnection();
        const [rows] = await connection.query(
            "SELECT ClienteID, Compania, Contacto, Titulo, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Fax FROM clientes"
        );
        res.status(200).json(rows);
    } catch (error) {
        console.error("Error al obtener cliente:", error.message);
        res.status(500).json({
            message: "Error interno del servidor al obtener los cliente",
            error: error.message
        });
    }
};

const postClientes = async (req, res) => {
    try {
        const {ClienteID, Compania, Contacto, Titulo, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Fax} = req.body;
        const cliente = {
            ClienteID, Compania, Contacto, Titulo, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Fax
        }
        const connection = await getConnection();

        const result = await connection.query("INSERT INTO clientes SET ?", cliente);
        res.json(result)
    } catch (error) {
        console.error("Error al crear la cliente:", error.message);
        res.status(500).json({
            mensaje: "Hubo un error al crear la cliente",
            error: error.message
        });
    }
}

export const methodClientes = {
    postClientes,
    getClientes
};