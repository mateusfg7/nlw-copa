import Fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
  log: ['query', 'warn', 'error'],
})

async function bootstrap() {
  const fastify = Fastify({
    logger: true,
  })

  fastify.get('/pools/count', async () => {
    const pools = await prisma.pool.count()

    return { count: pools }
  })

  await fastify.listen({ port: 3333 })
}

bootstrap()
