export default {

  async fetch(request: Request): Promise<Response> {
    if (request.method.toUpperCase() !== 'GET') return new Response('Method Not Allowed', { status: 405 });

    const url = new URL(request.url);
    if (url.pathname.toLowerCase() !== '/hello') return new Response('Not Found', { status: 404 });

    const name = url.searchParams.get('name') || 'World';
    return new Response(`Hello ${name}!`);
  }

};