import { Hono } from 'hono/quick';

const app = new Hono();

app.get('/hello', (c) => {
  const name = c.req.query('name') || 'World';
  return c.text(`Hello ${name}!`);
});

export default app;
