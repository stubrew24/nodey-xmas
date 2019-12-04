const express = require("express");
const app = express();
const http = require("http").createServer(app);
const PORT = process.env.PORT || 3000;

app.use(express.static("src"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/src/index.html");
});

app.listen(PORT, console.log("Listening on port ", PORT));
