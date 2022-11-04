import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'

export async function guessRoutes(fastify: FastifyInstance) {
  fastify.get('/guesses/count', async () => {
    const pools = await prisma.guess.count()

    return { count: pools }
  })
}
