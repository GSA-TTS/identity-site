export default /** @type {import('svgo').OptimizeOptions} */ ({
  multipass: true,
  plugins: [
    {
      name: 'preset-default',
    },
    {
      name: 'removeViewBox',
      active: false,
    },
  ],
});
