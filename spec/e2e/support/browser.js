export const concurrency = Number(process.env.BROWSER_TEST_CONCURRENCY) || 4;

export function getURL(path) {
  return new URL(path, process.env.ROOT_URL).toString();
}
