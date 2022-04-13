import express from "express";
import http from "http";
import * as dotenv from "dotenv";
dotenv.config();

const PORT = process.env["PORT"] || 4000;
const HOST = process.env["NODE_ENV"] === "production" ? "" : "localhost:";

const main = async () => {
  const app = express();

  app.get("/*", (req, res) => {
    res.send("Hello");
  });

  const httpServer = http.createServer(app);

  httpServer.listen(PORT, () => {
    console.log(`server started on ${HOST}${PORT}...`);
  });
};

main().catch((error) => {
  console.error(error);
});
