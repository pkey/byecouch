const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    "/api",
    proxy({
      target: "https://byecouch.herokuapp.com",
      changeOrigin: true,
      pathRewrite: {
        "^/api": ""
      }
    })
  );
};
