// NOTE - this is not working

const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  console.log("Setting up proxy middleware...");

  // Redirect /spring-docker to http://localhost:9080/SpringDocker
  app.use(
    "/spring-docker",
    createProxyMiddleware({
      target: "http://localhost:8080",
      changeOrigin: true,
      pathRewrite: {
        "^/spring-docker": "/SpringDocker",
      },
    })
  );

  // Redirect /another-route to http://localhost:9080/AnotherRoute
  app.use(
    "/another-route",
    createProxyMiddleware({
      target: "http://localhost:8080",
      changeOrigin: true,
      pathRewrite: {
        "^/another-route": "/AnotherRoute",
      },
    })
  );

  // Add more redirects here as needed

  // Log information about incoming requests
  app.use((req, res, next) => {
    console.log("Incoming request:", req.method, req.originalUrl);
    next();
  });
};
