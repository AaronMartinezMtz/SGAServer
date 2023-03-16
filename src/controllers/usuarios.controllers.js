import { pool } from '../db.js';


export const register = async(req,res) => {

    const {userName, names, lastNames, uPassword} = req.body;
    try {
        
        const [result] = await pool.query('INSERT INTO Usuarios (userName, names, lastNames, uPassword) VALUES (?,?,?,?)', 
            [userName, names, lastNames, uPassword]
        )

        res.send({
            status: true,
            userName,
        })
    } catch (error) {
        
        return res.status(400).json({
            mensaje: "Ya existe el usuario"
        })

    }


}

export const getAllUsers = async(req,res) => {

    const [result] = await pool.query('SELECT userName, names, lastNames  FROM Usuarios ')

    res.send({
        id: result.insertId,
        usuarios: result
    })

}

export const getUser = async(req,res) => {

    const Username = req.params.username

    const [result] = await pool.query('SELECT userName, names, lastNames, uPassword  FROM Usuarios WHERE userName = ?', [Username])

    if(result.length <= 0 ){
        return res.status(404).json({
            mensaje: "usuario no encontrado"
        })
    }

    res.send({
        usuario: result[0],
        status: true
    })

}


export const deleteUser = async(req,res) => {

    const Username = req.params.username

    const [result] = await pool.query('DELETE FROM Usuarios WHERE userName = ?', [Username])

    if(result.affectedRows <= 0 ){
        return res.status(404).json({
            mensaje: "usuario no encontrado para eliminar"
        })
    }

    res.send({
        status: true
    })

}

export const updateUser = async(req,res) => {

    const {username} = req.params
    const {names, lastNames, uPassword} = req.body

    const [result] = await pool.query('UPDATE Usuarios SET names = ?, lastNames = ?, uPassword = ? WHERE userName = ?', [names, lastNames, uPassword, username])

    if(result.affectedRows === 0 ){
        return res.status(404).json({
            mensaje: "usuario no encontrado para actualizar"
        })
    }

    res.send({
        status: true
    })

}

