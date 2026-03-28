import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";

const app = new Hono();

app.use("*", logger());
app.use("/api/*", cors());

app.get("/api/hello", (c) => {
  const greeting = process.env.GREETING ?? "Hello from Otavia!";
  return c.json({ message: greeting });
});

export function createAppForBackend() {
  return app;
}

export default {
  port: 3000,
  fetch: app.fetch,
};
