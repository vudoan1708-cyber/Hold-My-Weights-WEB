const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    createProxyMiddleware(
      '/oauth',
      {
        target: 'http://localhost:5000',
        pathRewrite: { '^/oauth': '' },
        changeOrigin: true,
      }
    )
  );
};
