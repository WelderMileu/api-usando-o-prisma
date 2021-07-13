import { Router } from 'express';

import middleware from './middleware/middleware'

const Route = Router();

Route.get('/', middleware.index);
Route.post('/create', middleware.create);
Route.get('/listUsers', middleware.listUsers);
Route.delete('/delete', middleware.delete);

export default Route;