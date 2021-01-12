export default () =>
  Promise.all([global.browser.close(), new Promise((resolve) => global.server.close(resolve))]);
