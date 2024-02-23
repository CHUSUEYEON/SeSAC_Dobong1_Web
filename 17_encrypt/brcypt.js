const brcypt = require("bcrypt"); // 강력한 암호화 모듈.(salt를 쓰지 않는데 항상 다른 값을 출력함)

// 솔트의 라운드 수 정의 >> 해시 함수의 반복
// 숫자가 클수록 안전함. 단, 성능 저하를 일으킴.
const saltRounds = 10;

// 1. 회원가입 >> 해시값 생성
function hashPW(pw) {
  // hashSync(비밀번호, 솔트라운드) // 리턴값은 암호화된 문자(string)
  return brcypt.hashSync(pw, saltRounds);
}
// 2.로그인 >> 해시값 일치 확인
function comparePW(inputPw, hashedPw) {
  //compareSync(원본비밀번호, 해시된 비밀번호)
  return brcypt.compareSync(inputPw, hashedPw); // 리턴값은 ture or false
}

// 비밀번호에 대한 해시값 생성
// 회원가입 작업시 활용
const originalPassword = "12345";
const hashedPw = hashPW(originalPassword);
console.log("암호화된 비밀번호 >>", hashedPw);

// 비밀번호 일치 여부 확인
// 로그인 작업시 활용
const isMatch = comparePW("12345", hashedPw); //ture
const isMatch2 = comparePW("1234", hashedPw); //false

console.log("비밀번호 일치??", isMatch);
console.log("비밀번호 일치??", isMatch2);
