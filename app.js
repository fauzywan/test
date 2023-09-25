const http = require("http");
const fs = require("fs");
const port = 3000;

const renderHTML = (path, res) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write("Error: file not Found");
    } else {
      res.write(data);
    }
    res.end();
  });
};
http
  .createServer((req, res) => {
    const url = req.url;
    res.writeHead(200, { "Content-Type": "text/html" });
    console.log(req.url);

    if (url == "/about") {
      renderHTML("./index.html", res);
    } else if (url == "/contact") {
      res.write("<h1>Ini Adalah Halaman Contact</h1>");
      res.end();  
    } else {
      renderHTML("./index.html", res);
    }
  })
  .listen(port, () => {
    console.log(`Server is Listening on Port ${port}`);
  });
