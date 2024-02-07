const { createServer } = require('node:http');
const handler = require('serve-handler');
const getPort = require('get-port');

module.exports = async function serve() {
  const port = await getPort();

  const server = createServer((request, response) =>
    handler(request, response, { public: './_site' }),
  ).listen(port);

  return {
    server,
    port,
  };
};
