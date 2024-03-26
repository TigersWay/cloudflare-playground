interface Env {}

export const onRequestGet: PagesFunction<Env> = async context => {
  const url = new URL(context.request.url);
  const name = url.searchParams.get('name') || 'World';

  return Response.json({
    hello: name,
    colo: context.request.cf?.colo
  });
};
