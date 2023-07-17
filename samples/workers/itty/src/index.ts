import { Router, error, text } from 'itty-router';

const router = Router();

router.get('/hello', (request) => {
  const { name = 'World' } = request.query;
  return text(`Hello ${name}! (${request.cf?.colo})`);
});

router.all('*', () => error(404));

export default { fetch: router.handle };
