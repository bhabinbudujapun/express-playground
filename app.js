const express = require("express");
const multer = require("multer");
const path = require("path");

const PORT = 3000;

// Create instance of express.
const app = express();

// Set EJS as the view engine
app.set("view engine", "ejs");

// Serve static files from the 'public' directory
app.use(express.static("public"));

// Include express.json() middleware
app.use(express.json());

// Include express.urlencoded() middleware
app.use(express.urlencoded({ extended: true }));

// Set up multer for storing uploaded images in 'public/images' directory
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Save the file with a timestamp
  },
});

const upload = multer({ storage: storage });

app.get("/", (req, res) => {
  res.render("card", { filename: undefined });
});

app.post("/images", upload.single("myFile"), (req, res) => {
  console.log("Body: ", req.body);
  console.log("File: ", req.file);

  const filePath = `/images/${req.file.filename}`;
  res.render("card", { filename: filePath });
});

app.listen(PORT, () => {
  console.log(`Server started on port : ${PORT}`);
});
