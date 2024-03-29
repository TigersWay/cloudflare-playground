import { createRouter, Response } from 'fets';

export default {
  fetch: createRouter().route({
    method: 'GET',
    path: '/hello',
    handler(req) {
      const { name = 'World' } = req.query;
      return Response.json({
        hello: name,
        // @ts-ignore
        colo: req.cf?.colo
      });
    }
  })
};
