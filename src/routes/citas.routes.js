import { Router } from "express";
import { deleteCita, getAllCitas, getUser, register, updateCita }  from '../controllers/citas.controllers.js'

const router = Router();


router.post('/Crear',register)

router.get('/Ver',getAllCitas )

router.post('/VerUno',getUser )

router.post('/Eliminar', deleteCita)

router.put('/Actualizar', updateCita)


export default router;