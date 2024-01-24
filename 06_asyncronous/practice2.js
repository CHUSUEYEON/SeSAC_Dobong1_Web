function call(name) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log(name);
      res(name + "반가워");
    }, 1000);
  });
}

function back() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("back1");
      res("back2");
    }, 1000);
  });
}

function hell() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("callback hell");
    }, 1000);
  });
}

// --------------------------------------------------
// promise 버전
// call("kim")
//   .then((result) => {
//     console.log(result);
//     return back();
//   })
//   .then((txt) => {
//     console.log(txt + "을 실행했구나");
//     return hell();
//   })
//   .then((msg) => {
//     console.log("여기는" + msg);
//   });

// --------------------------------------------------
// callback hell 버전
// call -> back -> hell 순서로 실행
// call("kim", function (name) {
//   console.log(name + "반가워");
//   back(function (txt) {
//     console.log(txt + "을 실행했구나");
//     hell(function (message) {
//       console.log("여기는 " + message);
//     });
//   });
// });

// --------------------------------------------------
// async 방법 1(메시지가 안 담겨서 직접 작성해야 함)
// async function execute() {
//   await call("kim");
//   console.log("kim 반가워");
//   await back();
//   console.log("back2를 실행했구나");
//   await hell();
//   console.log("여기는 callback hell");
// }

execute();
// --------------------------------------------------
// async 방법 2(res를 변수에 담아서 활용)
async function execute() {
  let ass = await call("kim");
  console.log(ass);
  let ass2 = await back();
  console.log(ass2 + "를 실행했구나");
  let ass3 = await hell();
  console.log("여기는" + ass3);
}
// res 를 쓰고 싶으면 변수에 담아서 활용하면 됨.
