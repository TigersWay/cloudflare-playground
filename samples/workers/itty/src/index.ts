import { Router, text } from 'itty-router';

const router = Router();

router.get('/hello', (ctx) => {
  const name = ctx.query.name || 'World';
  return text(`Hello ${name}!`);
});

router.all('*', () => new Response('404 Not Found', { status: 404 }));

export default { fetch: router.handle };
