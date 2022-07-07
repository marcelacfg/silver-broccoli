import Hapi from "hapi";

import database from "./config/database";
import userRoute from "./routes/userRoute";

const port = 3000;

const server = Hapi.server({
  host: "localhost",
  port,
  routes: {
    json: {
      space: 4,
    },
  },
});

userRoute(server);

server.route({
  method: "GET",
  path: "/",
  handler: () => "Hello World",
});
