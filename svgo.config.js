module.exports = /** @type {import('svgo').OptimizeOptions} */ ({
  multipass: true,
  plugins: [
    {
      name: 'removeViewBox',
      active: false,
    },
  ],
});
