import Fastify from 'fastify';
import { createReadStream } from 'fs';
import { join } from 'path';

const fastify = Fastify({ logger: true });
const clients = new Map(); // Map to store SSE clients by sessionId

// Handle POST requests to /api/:sessionId
fastify.post('/api/:sessionId', async (request, reply) => {
  const sessionId = request.params.sessionId;
  const data = typeof request.body === 'string' ? request.body : JSON.stringify(request.body);

  console.log(JSON.stringify(JSON.parse(data), null, 2));
  console.log("Received data:", data);

  // Send data to the SSE client with the matching sessionId
  const client = clients.get(sessionId);
  if (client) {
    client.write(`data: ${data}\n\n`);
  } else {
    console.log(`No SSE client found for sessionId: ${sessionId}`);
  }

  return { status: 'Yay!' };
});


// Handle GET requests to /sse/:sessionId
fastify.get('/sse/:sessionId', (request, reply) => {
  const sessionId = request.params.sessionId;

  reply.raw.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
  });

  // Add this client to the map with its sessionId
  clients.set(sessionId, reply.raw);

  // Remove client on disconnect
  request.raw.on('close', () => {
    clients.delete(sessionId);
  });
});

// Serve the index.html page
fastify.get('/', (request, reply) => {
  const stream = createReadStream(join(process.cwd(), 'index.html'));
  reply.type('text/html').send(stream);
});

fastify.get('/prompt', (request, reply) => {
  const stream = createReadStream(join(process.cwd(), 'prompt.html'));
  reply.type('text/html').send(stream);
});

fastify.listen({ port: 5009 }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`Server listening at ${address}`);
});
