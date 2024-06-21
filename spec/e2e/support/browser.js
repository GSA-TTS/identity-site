export function getURL(path) {
  return new URL(path, process.env.ROOT_URL).toString();
}
