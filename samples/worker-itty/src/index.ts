import { Router, text } from 'itty-router';

const router = Router();

router.get('/hello', (ctx) => {
  const name = ctx.query.name || 'World';
  return text(`Hello ${name}!`);
});

export default { fetch: router.handle };
