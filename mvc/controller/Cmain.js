const Comment = require("../model/Comment"); //commentsInfo()
/*
controller 에서는 Model에서 받은 데이터를 가공해서 view에 전달할 수 있어요
*/

//localhost:8000/

//GET/
exports.main = (req, res) => {
  res.render("index");
};

//GET /comments
exports.comments = (req, res) => {
  console.log(Comment.commentsInfo());
  res.render("comments.ejs", { commentInfo: Comment.commentsInfo() });
};

//GET /comment/:id(params 사용) >> comment.ejs

exports.comment = (req, res) => {
  console.log(req.params);
  const commentId = req.params; //1,2,3,4

  //   if (commentId < 1 || commentId > commentId.length) {
  //     return res.render("404");
  //   }

  //   if (isNaN(commentId)) {
  //     //NaN : Not a Number
  //     return res.render("404");
  //   }

  //한번에 처리
  if (!Comment.commentsInfo()[commentId - 1]) {
    return res.render("404");
  }

  res.render("comment", {
    commentInfo: Comment.commentsInfo()[commentId - 1],
  });
};
