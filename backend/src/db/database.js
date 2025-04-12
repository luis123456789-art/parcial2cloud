import mysql from "mysql2/promise.js";

import config from "./../config.js";

//hacer objeto de conexion
 const connection = mysql.createPool({
    host: config.host,
    database: config.database,
    user: config.user,
    port: config.PORT,
    password: config.password

})

//retornar la conexion de la bd 
export default connection