import getConnection from "../db/database.js";

const getEmpleados = async (req, res) => {
    try {
        const connection = await getConnection();
        const [rows] = await connection.query(
            "SELECT EmpleadoID, Apellido, Nombre, Titulo, TituloCortesia, FechaNacimiento, FechaContratacion, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Extension, Foto, Notas, Jefe, RutaFoto FROM empleados"
        );
        res.status(200).json(rows);
    } catch (error) {
        console.error("Error al obtener empleados:", error.message);
        res.status(500).json({
            message: "Error interno del servidor al obtener los empleados",
            error: error.message
        });
    }
};

export const methodEmpleados = {
    getEmpleados
};