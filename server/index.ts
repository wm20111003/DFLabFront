import config from '../nuxt.config'
const { Nuxt, Builder } = require('nuxt')
const fastify = require('fastify')({
  logger: true
})

// Import and Set Nuxt.js options

config.dev = process.env.NODE_ENV !== 'production'

async function start() {
  console.log(config)
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)
  const { host = process.env.HOST || '127.0.0.1', port = process.env.PORT || 3000 } = nuxt.options.server
  await nuxt.ready()
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  fastify.use(nuxt.render)

  fastify.listen(port, host, (err, address) => {
    console.log(address)
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  })
}

start()
