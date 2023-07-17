import { Pico } from '@picojs/pico';

const router = Pico();

router.get('/hello', (c) => {
  const name = new URLSearchParams(c.result.search.input).get('name') || 'World';
  return new Response(`Hello ${name}! (${c.req.cf?.colo})`);
});

router.all('*', () => new Response('404 Not Found', { status: 404 }));

export default { fetch: router.fetch };