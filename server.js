import { createServer } from "node:http";

const port = 3000;
const server = createServer();

server.on("request", (request, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  res.end("<h1>Welcome to your first server</h1>");
});

server.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
