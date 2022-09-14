// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })


const res1 = ['kudu', 'mac', 'kfc'];
fastify.get('/res1', (req, res) => {
  return res1

});

fastify.post('/res1', (req, res) => {
  const newres1 = req.body;
  console.log(newres1);
  return res1
});


const mup = ['shadow', 'lipssteck', 'eyeliner'];
fastify.get('/Mup', (req, res) => {
  return mup

});

fastify.post('/Mup', (req, res) => {
  const newm = req.body;
  console.log(newm);
  return mup
});



const cars = ['bmw', 'hunda', 'bntle'];
fastify.get('/car', (req, res) => {
  return cars

});

fastify.post('/car', (req, res) => {
  const newc = req.body;
  console.log(newc);
  return cars
});


// Declare a route
fastify.get('/', async (request, reply) => {
  return { hello: 'ld' }
})

// Run the server!
const host = process.env.NODE_ENV === 'production' ? '0.0.0.0' : '127.1'
const port = process.env.$PORT || process.env.PORT || 4000;
const start = async () => {
  try {
    await fastify.listen({
      port: port,
      host: host,
    });
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()