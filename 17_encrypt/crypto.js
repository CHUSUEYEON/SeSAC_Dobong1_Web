const crypto = require("crypto"); // nodejs 내장 모듈, 설치x
/*
1. crypto를 이용한 단방향 암호화 구현 - 복호화 불가능
- createHash()
- pbkdf2Sync(비밀번호, 솔트, 반복횟수, 키의 길이, 알고리즘)
*/

// 1-1) createHash(알고리즘).update(암호화할 값).digest(인코딩방식)
// 인코딩으로는 base64, hex, ascii, binary 등을 쓸 수 있음

// 비밀번호를 받아서 암호화 시켜주는 함수
const createHashPW = (pw) => {
  return crypto.createHash("sha512").update(pw).digest("base64");
};

console.log("1st hashing", createHashPW("1234")); //password 인자는 문자열!!!
console.log("2nd hashing", createHashPW("1234"));
console.log("3rd hashing", createHashPW("1234")); //전부 다 똑같은 값
console.log("another val", createHashPW("1234.")); // .하나 붙였는데 완전 다름

// 1-2) pbkdf2Sync(암호화할 값, 솔트, 반복횟수, 키길이, 알고리즘).toString(인코딩방식)
/*
- 솔트를 이용해서 해싱하는 함수
- salt 생성 : crypto.randomBytes(바이트수)
- randomBytes와 pbkdf2Sync 함수는 버퍼 형식의 데이터를 리턴
*/

// const str = "hello!";
// const buffer = Buffer.from(str); //100 001 형태의 버퍼가 16진수로 표현. 버퍼 : "hello!"를 이진 데이터로 표시. 콘솔창에는 16진수 형태로 나옴.
// console.log(buffer);

// 회원가입 과정
// 새로운 hash 와 salt를 만드는 과정, >> db에 hash와 salt를 저장해야 함.
function saltAndHashPW(pw) {
  const salt = crypto.randomBytes(16).toString("base64");
  const iterations = 100; //반복횟수
  const keylen = 64; // 생성할 키의 길이
  const algorithm = "sha512"; // 알고리즘

  const hash = crypto
    .pbkdf2Sync(pw, salt, iterations, keylen, algorithm) //buffer
    .toString("base64"); // buffer to string

  return { hash, salt }; //{hash: hash, salt:salt}
}

console.log("1st hashing", saltAndHashPW("1234"));
console.log("2nd hashing", saltAndHashPW("1234"));
console.log("3rd hashing", saltAndHashPW("1234"));
// 같은 1234를 암호화시켰으나 모두 다른 해시값 출력 -> 랜덤화된 솔트덕.(솔트값이 다 다르기 때문에)
// DB에 솔트값을 저장하는 과정이 필요함. 로그인했을 때 같은 사용자인지 확인하기 위해.

//로그인 과정
//DB에 있는 hash와 salt를 이용해서
//input password의 hash값 검증
function checkPW(inputPW, savedSalt, savedHash) {
  const iterations = 100; //saltAndPW랑 같아야 함.
  const keylen = 64; //saltAndPW랑 같아야 함.
  const algorithm = "sha512"; //saltAndPW랑 같아야 함.

  // inputPW를 해시 시켜주는 작업 - 해시값과 해시값을 비교
  const hash = crypto
    .pbkdf2Sync(inputPW, savedSalt, iterations, keylen, algorithm)
    .toString("base64"); // 네가지 조건은 완전히 똑같아야 함.
  console.log("input hash, >>>", hash);
  return savedHash === hash;
}

console.log("=====================================================");
const registerPw = "qwer1234";

// 회원가입
const { salt: registerSalt, hash: registerHash } = saltAndHashPW(registerPw);
console.log("암호화에 쓰인 Salt >>>", registerSalt);
console.log("암호화된 Hash >>>>>>>", registerHash);

// 로그인 >> 비밀번호가 db의 hash값과 일치하는지 확인
const isMatch = checkPW("qwer1234", registerSalt, registerHash);
const isMatch2 = checkPW("qwer12345", registerSalt, registerHash);
console.log("비밀번호 일치? >>", isMatch);
console.log("비밀번호 일치? >>", isMatch2);

/*
2. 양방향 암호화: 복화화 가능
*/

//createCipheriy()
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const algorithm = "aes-256-cbc";

const originalMessage = "hello, world";
console.log("***********양방향 암호화***************");

// 암호화
function encrypt(text) {
  // 1. 암호화 객체 생성
  //const cipher =crypto.creatCipheriv(알고리즘, 키, iv)
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  // 2. 실제 데이터 암호화 작업
  //   let encrypted = cipher.update(암호화할 데이터, 입력인코딩, 출력인코딩);
  let encrypted = cipher.update(text, "utf8", "base64");
  //3. final 을 이용해서 최종 결과 생성
  encrypted += cipher.final("base64");
  return encrypted;
}
// console.log(encrypt(originalMessage));

// 복호화
function decrypt(encryptedText) {
  // 1. 복호화 객체 생성
  const decipher = crypto.createDecipheriv(algorithm, key, iv); // 똑같은 알고리즘, 키, iv가 들어가야 함
  // 2. 실제 데이터 복호화
  // base64로 인코딩된 문자열이 utf8형태로 복호화된다.
  let decrypted = decipher.update(encryptedText, "base64", "utf8");
  // 3. final을 이용해서 최종 결과 생성
  decrypted += decipher.final("utf8");

  return decrypted;
}

const encryptedMessage = encrypt(originalMessage); // 암호화
console.log("암호화 됨", encryptedMessage);

const decryptedMessage = decrypt(encryptedMessage);
console.log("복호화 됨", decryptedMessage);
