import { createRequestHandler } from "react-router";
import { createHonoServer } from "react-router-hono-server";

export default await createHonoServer({
  configure(app) {
    // Add any custom middleware or configuration here
  },
  getLoadContext() {
    return {};
  },
});
