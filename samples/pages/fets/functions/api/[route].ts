import { Response, createRouter } from 'fets';

export const onRequest = createRouter({ base: '/api' }).route({
  method: 'GET',
  path: '/hello',
  handler(request) {
    const { name = 'World' } = request.query;
    return new Response(`Hello ${name}!  (${request.cf?.colo})\n`);
  }
});
