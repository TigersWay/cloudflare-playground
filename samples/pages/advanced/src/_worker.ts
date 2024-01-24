interface Env {
  ASSETS: Fetcher;
}

import { hello } from './hello';

export default {
  async fetch(request: Request, env: Env) {
    const url = new URL(request.url);
    // console.log(url.pathname);
    if (url.pathname.startsWith('/api/hello')) return hello(request);

    return env.ASSETS.fetch(request);
  }
};
