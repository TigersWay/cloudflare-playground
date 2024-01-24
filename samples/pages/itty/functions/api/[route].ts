import { Router, text } from 'itty-router';

const router = Router({ base: '/api' });

router.get('/hello', request => {
  const { name = 'World' } = request.query;
  return text(`Hello ${name}!  (${request.cf?.colo})\n`);
});

export const onRequest = async (context: any) => {
  const { request, env } = context;
  return await router.handle(request, env);
};
