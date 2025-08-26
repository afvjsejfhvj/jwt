//rotas de autenticação
//rotas de autenticação

import express from 'express';

const routes = express.Router();

routes.post('/register', register);
routes.post('/login', login);

export default routes;
