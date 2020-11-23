const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

require('dotenv').config();
const aedes = require('aedes')();
const ws = require('websocket-stream');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const httpServer = createServer((req, res) => {
    const parsedUrl = parse(req.url, true)
    handle(req, res, parsedUrl)
  });

  ws.createServer({ server: httpServer }, aedes.handle);
  
  httpServer.listen(3001, (err) => {
    if (err) throw err
    console.log('> Server ready!!!')
  });
});
