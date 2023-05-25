import { Router, text } from 'itty-router';

const router = Router({ base: '/api' });

router.get('/hello', (ctx) => {
  const
    name = ctx.query.name || 'World';
  return text(`Hello ${name}!`);
});

//   return c.text(`Hello ${name}!`);
// });



export const onRequest = async (context: any) => {
  const { request, env } = context;
  return await router.handle(request, env);
}

