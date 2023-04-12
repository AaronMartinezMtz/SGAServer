import { pool } from '../db.js';


export const register = async(req,res) => {

    const {fecha, hora, duracion, paciente} = req.body;


    console.log(`DATOS DE FROT = { ${ fecha } }`);

    var [result] = await pool.query('SELECT * FROM Citas WHERE fecha = ? and hora = ?', 
        [fecha, hora]
    )

    console.log(result);
    var datos = result[0];
    // console.log(`fecha y hora ${datos}`);
    
    if(result.length>0){
        return res.status(404).json({
            mensaje: "Ya existe una reserva para la fecha y hora"
        })
    }


    try {

        const [resultado] = await pool.query('INSERT INTO Citas (fecha, hora, duracion, paciente) VALUES (?,?,?,?)', 
            [fecha, hora, duracion, paciente]
        )


        res.send({
            status: true,
            message:"Cita reservada con exito",
            cita: {fecha, hora, duracion, paciente}
        })
    } catch (error) {
        
        return res.status(400).json({
            mensaje: "Error"
        })

    }

}



export const getAllCitas = async(req,res) => {

    const [result] = await pool.query('SELECT * FROM Citas ')

    res.send({
        id: result.insertId,
        citas: result
    })

}


export const deleteCita = async(req,res) => {

    const {id} = req.body;

    const [result] = await pool.query('DELETE FROM Citas WHERE id = ?', [id])

    if(result.affectedRows <= 0 ){
        return res.status(404).json({
            mensaje: "usuario no encontrado para eliminar"
        })
    }

    res.send({
        status: true
    })

}


export const getUser = async(req,res) => {

    const {id} = req.body

    const [result] = await pool.query('SELECT fecha, hora, duracion, paciente  FROM Citas WHERE id = ?', [id])

    if(result.length <= 0 ){
        return res.status(404).json({
            mensaje: "usuario no encontrado"
        })
    }

    res.send({
        cita: result[0],
        status: true
    })

}


export const updateCita = async(req,res) => {

    const { id, fecha, hora, duracion, paciente} = req.body

    const [result] = await pool.query('UPDATE Citas SET fecha = ?, hora = ?, duracion = ?, paciente = ? WHERE id = ?', [fecha, hora, duracion, paciente, id])

    if(result.affectedRows === 0 ){
        return res.status(404).json({
            mensaje: "usuario no encontrado para actualizar"
        })
    }

    res.send({
        status: true
    })

}