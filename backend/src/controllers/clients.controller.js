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
    const {nombre, apellidos, telefono, correo} = req.body;

    try {
        await pool.query("INSERT INTO clientes (nombre, apellidos, telefono, correo) VALUES ($1, $2, $3, $4)" , [nombre, apellidos, telefono, correo]);
        console.log('Cliente guardado correctamente');
        res.send('Cliente guardado correctamente');
    } catch (ex) {
        console.log('Ha ocurrido un error al guardar alumno: ' + ex);
    }
}

export const deleteClient = async (req, res) => {
    const {id} = req.params;

    try {
        const existClient = await pool.query('SELECT COUNT(*) AS Exist FROM clientes WHERE id = $1', [id]);
        if(existClient.rows[0].exist > 0) {
            await pool.query("DELETE FROM clientes WHERE id=$1", [id]);
            res.status(200).json({ message: 'Cliente eliminado correctamente'});
        } else {
            res.status(404).json({ message: "Cliente no encontrado" }) 
        }
        
    } catch (ex) {
        res.status(500).json({ message: 'Ha ocurrido un error al eliminar el cliente', error: ex.message });
    }
}

export const getOneClient = async (req, res) => {
    const {id} = req.params;

    try {
        const existClient = await pool.query('SELECT COUNT(*) AS Exist FROM clientes WHERE id = $1', [id]);
        if(existClient.rows[0].exist > 0) {
            const client = await pool.query("SELECT * FROM clientes WHERE id = $1", [id])
            res.status(200).send(client.rows);
        } else {
            res.status(404).json({ message: "Cliente no encontrado" }) 
        }
    } catch (ex) {
        res.status(500).json({ message: 'Ha ocurrido un error al mostrar el cliente', error: ex.message });
    }
}

export const updateClient = async (req, res) => {
    const {id} = req.params;
    const {nombre, apellidos,telefono, correo} = req.body

    try {
        const existClient = await pool.query('SELECT COUNT(*) AS Exist FROM clientes WHERE id = $1', [id]);
        if(existClient.rows[0].exist > 0) {
            const client = await pool.query("UPDATE clientes SET nombre = $1, apellidos = $2, telefono = $3, correo = $4 WHERE id = $5", [nombre, apellidos,telefono, correo, id]);
            res.status(200).json({ message: 'Cliente Actualizado correctamente'})
            res.status(200).send(client.rows);
        } else {
            res.status(404).json({ message: "Cliente no encontrado" });
        }
    } catch (ex) {
        res.status(500).json({ message: 'Ha ocurrido un error al actualizar el cliente', error: ex.message });
    }
}