interface Env {}

export const onRequestGet: PagesFunction<Env> = async context => {
  const url = new URL(context.request.url),
    name = url.searchParams.get('name') || 'World';
  return new Response(`Hello ${name}! (${context.request.cf?.colo})\n`);
};
