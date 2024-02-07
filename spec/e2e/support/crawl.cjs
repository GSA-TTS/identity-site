const { createReadStream } = require('fs');
const saxophonist = require('saxophonist');

module.exports = async function crawl(sitemap) {
  const stream = createReadStream(sitemap);
  const locs = stream.pipe(saxophonist('loc'));

  const urls = [];
  for await (const loc of locs) {
    urls.push(loc.text);
  }

  return urls;
};
