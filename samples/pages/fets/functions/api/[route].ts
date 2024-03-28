import { Response, createRouter } from 'fets';

export const onRequest = createRouter({ base: '/api' }).route({
  method: 'GET',
  path: '/hello',
  handler(request) {
    const { name = 'World' } = request.query;
    // @ts-ignore
    return new Response(`Hello ${name}!  (${request.cf?.colo})\n`);
  }
});
