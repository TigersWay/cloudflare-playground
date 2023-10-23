import { Hono } from 'hono/tiny';

const app = new Hono();

app.get('/hello', c => {
  const { name = 'World' } = c.req.query();
  return c.json({
    hello: name,
    colo: c.req.raw.cf?.colo
  });
});

app.all('*', c => c.notFound());

export default app;
