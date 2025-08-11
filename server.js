//arquivo principal da aplicação

import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js'

dotenv.config();
const app = express();

app.use(express.json());

//rota de autenticação
app.use('api/auth', authRoutes);

//iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`servidor rodanto em https://localhost:${PORT}`)
})
