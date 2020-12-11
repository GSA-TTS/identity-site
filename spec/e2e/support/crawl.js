import { get } from 'http';
import saxophonist from 'saxophonist';

export default async function* crawl(sitemap) {
  const response = await new Promise((resolve) => get(sitemap, resolve));
  const locs = response.pipe(saxophonist('loc'));

  for await (const loc of locs) {
    yield loc.text;
  }
}
