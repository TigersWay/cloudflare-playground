import { Router, error, json } from 'itty-router';

const router = Router();

router.get('/hello', request => {
  const { name = 'World' } = request.query;
  return json({
    hello: name,
    colo: request.cf?.colo
  });
});

router.all('*', () => error(404));

export default { fetch: router.handle };
