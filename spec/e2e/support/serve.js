import { createServer } from 'http';
import path from 'path';
import handler from 'serve-handler';
import getPort from 'get-port';

const { dirname } = import.meta;

export default async function serve() {
  const port = await getPort();

  const publicPath = path.relative(process.cwd(), path.resolve(dirname, '../../../_site'));

  const server = createServer((request, response) =>
    handler(request, response, { public: publicPath }),
  ).listen(port);

  return {
    server,
    port,
  };
}
