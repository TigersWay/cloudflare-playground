interface Env {}

export const hello = async (request: Request) => {
  const url = new URL(request.url),
    name = url.searchParams.get('name') || 'World';
  return new Response(`Hello ${name}! (${request.cf?.colo})`);
};
