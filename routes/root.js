/**@param {import('fastify').FastifyInstance} server*/
export default async (server) => {
  server.get('/', async (request, reply) => {
    return { status: 200 };
  });
};
