const jsonServer = require("json-server");
const db = require("./db");
const data = db();

const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults({ static: "./build" });
const port = process.env.PORT || 3000;

server.use(middlewares);

server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
    "/:resource/:year": "/:resource?year=:year",
  })
);

server.use(router);
server.listen(port);
