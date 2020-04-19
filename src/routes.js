import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/users', async (req, res) => {
  const user = await User.create({
    name: 'Eduardo Frade Oliveira',
    email: 'eduardofrad@hotmail.com',
    password_hash: '12345678',
  });

  return res.json(user);
});

export default routes;
