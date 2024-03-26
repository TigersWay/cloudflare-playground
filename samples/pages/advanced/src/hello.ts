interface Env {}

export const hello = async (request: Request) => {
  const url = new URL(request.url);
  const name = url.searchParams.get('name') || 'World';

  return Response.json({
    hello: name,
    colo: request.cf?.colo
  });
};
