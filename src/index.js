import express  from 'express';
import usuariosRoutes from './routes/usuarios.routes.js'
import authRoutes from './routes/auth.routes.js'
import citasRoutes from './routes/citas.routes.js'      
import cors from 'cors';

const app= express();
app.use(cors())
app.use(express.json())
app.use("/api/users",usuariosRoutes)
app.use("/api/auth",authRoutes)
app.use("/api/citas",citasRoutes)


app.get('/ping', (req,res) => res.send("poong"))
app.listen(3000);

