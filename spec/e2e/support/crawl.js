import { get } from 'http';
import saxophonist from 'saxophonist';

export default async function crawl(sitemap) {
  const response = await new Promise((resolve) => get(sitemap, resolve));
  const locs = response.pipe(saxophonist('loc'));

  const urls = [];
  for await (const loc of locs) {
    urls.push(loc.text);
  }

  return urls;
}
