import { Router } from 'express';

const routes = new Router();

routes.get('/test', (req, res) => res.json({ message: 'Hello Rocke' }));

export default routes;
