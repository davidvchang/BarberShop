import {pool} from "../bd.js";

export const getClients = async (req, res) => {
    try {
        const clients = await pool.query("SELECT * FROM clientes");
        res.status(200).send(clients.rows);
    } catch (ex) {
        console.log('Ha ocurrido un error al consultar a los estudiantes: ' + ex)
    }
}

export const postClients = async (req, res) => {
    const {nombre, apellidos, telefono, correo, tipo_servicio, notas} = req.body;

    try {
        await pool.query("INSERT INTO clientes (nombre, apellidos, telefono, correo, tipo_servicio, notas) VALUES ($1, $2, $3, $4, $5, $6)" , [nombre, apellidos, telefono, correo, tipo_servicio, notas]);
        console.log('Cliente guardado correctamente');
        res.send('Cliente guardado correctamente');
    } catch (ex) {
        console.log('Ha ocurrido un error al guardar alumno: ' + ex);
    }
}