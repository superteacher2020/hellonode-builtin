const express = require("express");
const app = express();
const port = process.env.PORT || "8080";

app.get(["/", "/:name"], (req, res) => {
  greeting = "<h1>Salam From Node on Fly!</h1>";
  name = req.params["name"];
  if (name) {
    res.send(greeting + "</br>and hello to " + name);
  } else {
    res.send(greeting);
  }
});

app.listen(port, () => console.log(`HelloNode app listening on port ${port}!`))

