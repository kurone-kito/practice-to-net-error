import http from "node:http";

// reproductions of net::ERR_EMPTY_RESPONSE

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<!DOCTYPE html>
<html>
  <head>
    <title>Mock Page</title>
    <script>
      const err = () => (window.location = "/err")
    </script>
  </head>
  <body>
    <button onclick="err()">Click to trigger net::ERR_EMPTY_RESPONSE</button>
  </body>
</html>`);
  } else {
    res.destroy();
    // req.socket.end();
  }
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
