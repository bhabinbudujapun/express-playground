const express = require("express");
const multer = require("multer");

const PORT = 3000;

// Create instance of express.
const app = express();

//Create instance of multer
const images = multer({ dest: "/images" });

app.use(express.static("public"));

// Set EJS as the view engine
app.set("view engine", "ejs");

// Include express.json() middleware
app.use(express.json());

// Include express.urlencoded() middleware
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("card");
});

app.post("/images", images.single('myFile'), (req, res) => {
  console.log("Body: ", req.body);
  console.log("File: ", req.file);
  console.log("File Successfully Uploaded. . .");
});

app.listen(PORT, () => {
  console.log(`Server started on port : ${PORT}`);
});
