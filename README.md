# cloudflare-playground

Metric studies on Cloudflare Workers & Pages

## Workers

- Native (Total Upload: 0.51 KiB / gzip: 0.32 KiB) \
  _No routing and no helper, but fastest_
  ![worker native](images/worker-native.png)

- [Pico](https://github.com/yusukebe/pico) (Total Upload: 0.96 KiB / gzip: 0.55 KiB) \
  _Light router but no helpers, fast anyway_
  ![worker pico](images/worker-pico.png)
  
- [itty-router](https://github.com/kwhitley/itty-router) (Total Upload: 2.08 KiB / gzip: 1.09 KiB) \
  _Famous router with its helpers, fast_
  ![worker itty-router](images/worker-itty.png)

- [Hono/quick](https://github.com/honojs/hono) (Total Upload: 28.10 KiB / gzip: 6.86 KiB) \
  _Real fast router but slightly too heavy for a 'free plan' 10ms_
  ![worker hono](images/worker-hono.png)

## Pages & Functions

- Native ![pages native](images/pages-native.png)

- [Pico](https://github.com/yusukebe/pico)
  ![pages pico](images/pages-pico.png)

- [itty-router](https://github.com/kwhitley/itty-router)
  ![pages itty-router](images/pages-itty.png)

- [Hono/quick](https://github.com/honojs/hono)
  ![pages hono](images/pages-hono.png)
