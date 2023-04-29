import { Hono } from 'hono';
import { handle } from 'hono/cloudflare-pages';

const app = new Hono();

app.get('/hello', (c) => {
  const
    name = c.req.query('name') || 'World';

  return c.text(`Hello ${name}!`);
});

export const onRequest = handle(app, '/api');
