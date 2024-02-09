const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// const indexRouter = require("./routes/index");
const indexRouter = require("./routes"); //index.js면 생략 가능
//localhost:8080/ 경로를 기본으로 하는 경로는
//indexRouter에서 처리
app.use("/", indexRouter);

//localhost:8080/user 경로를 기본으로 하는 경로는
//userRouter에서 처리
const userRouter = require("./routes/user");
app.use("/user", userRouter);

app.get("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`${PORT} is open!!!`);
  console.log(`http://localhost:${PORT}`);
});
