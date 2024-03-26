import { Router, json } from 'itty-router';

const router = Router({ base: '/api' });

router.get('/hello', request => {
  const { name = 'World' } = request.query;
  return json({
    hello: name,
    colo: request.cf?.colo
  });
});

export const onRequest = async (context: any) => {
  const { request, env } = context;
  return await router.handle(request, env);
};
