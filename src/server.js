const app = require("./app.js");
const http = require("http");

const PORT = normalizePort(process.env.PORT || 3000);

const server = http.createServer(app);

server.listen(PORT);

function normalizePort(val) {
  const port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
}

server.on("listening", () => {
  console.log(
    `Server is listening for requests on port ${server.address().port}`
  );
});
