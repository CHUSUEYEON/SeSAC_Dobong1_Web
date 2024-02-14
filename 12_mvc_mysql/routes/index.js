const express = require("express");
const controller = require("../controllers/index");
const router = express.Router();

// 렌더링, get 요청
router.get("/", controller.main);
router.get("/visitors", controller.getVisitors);

router.get("/visitor/:id", controller.getVisitor);

// 등록, 삭제, 수정
router.post("/visitor", controller.postVisitor);
router.delete("/visitor", controller.deleteVisitor);
router.patch("/visitor", controller.patchVisitor);

module.exports = router; //라우터 내보내기
