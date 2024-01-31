const express = require("express");
const app = express();
const PORT = 8000;
const multer = require("multer");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/uploads", express.static(__dirname + "/uploads"));
app.use("/public", express.static(__dirname + "/public"));

const uploadDetail = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/");
    },

    filename: function (req, file, done) {
      const extension = path.extname(file.originalname);
      done(
        null,
        path.basename(file.originalname, extension) + Date.now() + extension
      );
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

app.get("/", (req, res) => {
  console.log(req.method);
  console.log(req.url);
  res.render("index");
});

// app.post("/reset", (req, res) => {
//   console.log(req.body);
//   res.send(req.body);
// });

app.post("/upload", uploadDetail.single("profile"), (req, res) => {
  console.log(req.file.path);
  console.log(req.body);
  res.render("result", {
    userInfo: req.body,
    path: req.file.path,
  });
});

app.listen(PORT, () => {
  console.log(`${PORT} is open!!!`);
  console.log(`http://localhost:${PORT}`);
});
