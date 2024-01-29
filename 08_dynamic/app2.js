const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("practice2");
});

app.get("/axios", function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

// app.post("/", (req, res) => {
//   res.render("practice2");
// });

const a = "hello123";
const b = 1234;

app.post("/axios", function (req, res) {
  console.log(req.body);
  // const id = req.body.id;
  const { id, pw } = req.body;
  if (id == a && pw == b) {
    res.send({
      isUser: true,
    });
  } else {
    res.send({
      isUser: false,
    });
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
