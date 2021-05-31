module.exports = {
  define: {
    env: process.env.NODE_ENV,
  },
  targets: [
    'wechat-miniprogram',
  ],
  plugins: [
    './build.plugin.js',
  ],
};
