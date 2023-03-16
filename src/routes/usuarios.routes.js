import { Router } from "express";
import {register, getAllUsers, getUser, deleteUser, updateUser} from '../controllers/usuarios.controllers.js'

const router = Router();


router.post('/registrarUsuarios',register )

router.get('/AllUsuarios',getAllUsers )

router.get('/AllUsuarios/:username',getUser )

router.delete('/eliminarUsuario/:username', deleteUser)

router.put('/actualizarUsuario/:username', updateUser)



export default router;