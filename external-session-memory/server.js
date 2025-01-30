import Fastify from 'fastify';
import { createReadStream } from 'fs';
import { join } from 'path';
import crypto from 'crypto';

const fastify = Fastify({ logger: true });


const { PORTALIS_URL, PORTALIS_AUTH_SHARED_SECRET } = process.env;
// YOU MUST NOT expose PORTALIS_AUTH_SHARED_SECRET in the client side code
// Get PORTALIS_AUTH_SHARED_SECRET from your Portalis Admin Account 
// Get the url from the avatars embed link

if (!PORTALIS_URL || !PORTALIS_AUTH_SHARED_SECRET) {
  console.error("Please set the PORTALIS_URL, PORTALIS_AUTH_SHARED_SECRET environment variables");
  process.exit(1);
}


const getPortalSessionUrl = (extUserId) => {
  const baseUrl = new URL(PORTALIS_URL);

  const hmacSecret = PORTALIS_AUTH_SHARED_SECRET;

  // hmac and base64 encode the user id
  const extSignature = crypto.createHmac('sha256', hmacSecret).update(extUserId).digest('base64');

  // add the extUserId and extSignature to the url
  baseUrl.searchParams.append('extUserId', extUserId);
  baseUrl.searchParams.append('extSignature', extSignature);

  return baseUrl.toString();
};


fastify.get('/api/session-url', async (request, reply) => {

  // YOU MUST IMPLEMENT YOUR OWN AUTHENTICATION LOGIC HERE
  const username = request.query.username;

  if (!username) {
    return reply.code(400).send({ error: "Username is required" });
  }

  return { url: getPortalSessionUrl(username) };

});


// Serve the index.html page
fastify.get('/', (request, reply) => {
  const stream = createReadStream(join(process.cwd(), 'index.html'));
  reply.type('text/html').send(stream);
});

fastify.listen({ port: 5009 }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`Server listening at ${address}`);
});
