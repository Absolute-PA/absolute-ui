const { createServer } = require('https');
const { parse } = require('url');
const next = require('next');
const fs = require('fs');
require('dotenv').config();
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const httpsOptions = {
  key: fs.readFileSync('./certificates/localhost.key'),
  cert: fs.readFileSync('./certificates/localhost.crt'),
};
app.prepare().then(() => {
  createServer(httpsOptions, (req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(process.env.PORT ?? 3000, (err) => {
    if (err) throw err;
    console.log(
      `> Server started on https://localhost:${process.env.PORT ?? 3000}`
    );
  });
});
