const express = require("express");
const app = express();

const multer = require("multer");

const PORT = 3000;

app.use(express.static("public"));

// Set EJS as the view engine
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up Multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Handle file uploads
app.post("/upload", (req, res) => {
  // res.send("<h1> Hello, world </h1>");
  // upload(req, res, (error) => {
  //   if (error) {
  //     res.render("card", {
  //       message: error,
  //     });
  //   } else {
  //     res.render("card", {
  //       message: "Successfully uploaded...",
  //       filename: `upload/${req.file.filename}`,
  //     });
  //   }
  // });
  console.log(req.body);
  console.log(req.file);
  res.send("File successfully uploaded!");
});

app.get("/", (req, res) => {
  res.render("card");
});

app.listen(PORT, () => {
  console.log(`Server started on port : ${PORT}`);
});
