const express = require("express");
const app = express();

const PORT = 3000;

app.use(express.static("public"));

// Set EJS as the view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("card");
});

app.listen(PORT, () => {
  console.log(`App listen on PORT: ${PORT}`);
});
