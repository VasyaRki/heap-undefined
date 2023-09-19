'use strict';

import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import AutoLoad from '@fastify/autoload';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**@param {import('fastify').FastifyInstance} server*/
export default async (server, opts) => {
  server.register(AutoLoad, {
    dir: join(__dirname, 'routes'),
  });
};
