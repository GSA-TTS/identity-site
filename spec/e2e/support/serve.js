import { createServer } from 'http';
import path from 'path';
import handler from 'serve-handler';
import getPort from 'get-port';

export default async function serve() {
  const port = await getPort();

  const __dirname = import.meta.dirname;
  const publicPath = path.relative(process.cwd(), path.resolve(__dirname, '../../../_site'));

  const server = createServer((request, response) =>
    handler(request, response, { public: publicPath }),
  ).listen(port);

  return {
    server,
    port,
  };
}
