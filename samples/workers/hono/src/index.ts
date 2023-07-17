import { Hono } from 'hono/quick';

const app = new Hono();

app.get('/hello', (c) => {
  const { name = 'World' } = c.req.queries();
  return c.text(`Hello ${name}! (${c.req.raw.cf?.colo})`);
});

app.all('*', (c) => c.notFound());

export default app;
