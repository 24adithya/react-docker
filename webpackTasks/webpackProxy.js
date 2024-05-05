const proxyPaths = [
  {
    context: ["/spring-docker"],
    target: "http://localhost:3000",
    pathRewrite: { "^/spring-docker": "/SpringDocker" },
  },
];

module.exports = proxyPaths;
