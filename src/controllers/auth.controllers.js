import { pool } from '../db.js';


export const login = async(req,res) => {

    const {userName} = req.body;

    const sendPassword = req.body.uPassword


    console.log(`DATOS DE FROT = { ${userName} ${sendPassword} }`);

    var [result] = await pool.query('SELECT userName, names, lastNames, uPassword  FROM Usuarios WHERE userName = ? ', 
        [userName]
    )

    if(result.length<=0){
        return res.status(404).json({
            mensaje: "usurio o contraseña invalida"
        })
    }

    // console.log(result);
    var datos = result[0];
    console.log("HOLA")
    console.log(datos.uPassword);
    
    if(datos.uPassword!=sendPassword){

            return res.status(404).json({
                mensaje: "usurio o contraseña invalida 1"
            })

    }

    res.send({
        status: true,
        message: `Bienvenido `
    })

}

