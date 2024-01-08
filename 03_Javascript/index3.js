/*
var
- 재할당, 재선언 모두 가능
- 재선언: 바람직하지 않음(중복 선언)
*/

var name = '홍길동';
var name = '홍길동2';
console.log(name)

/*
let
- 재선언 불가능
- 재할당 가능
- 초기화 작업 필요 없음(최초 선언시 값 할당 하지 않아도 됨)
*/
let c;
c = 10; // 재할당
// let c; << 중복 선언 불가
console.log(c) //undefined가 나올 뿐이지 오류는 아님.

/*
const
- 재선언, 재할당 모두 불가
- 변하지 않는 값을 변수에 저장할 때 사용
- 초기화 작업 필요 : 최초 선언 시 반드시 값 할당
*/

// const b; << 초기화되지 않아서 오류 뜸
const b = 10; //이런식으로 선언과 값할당이 이뤄져야 함.
// b=11; 재할당해서 오류 뜸.(const 재할당 불가)

let q1 = 3;
q1 - 3;
console.log(q1) // 3

let q2 = 3;
q2 = q2 - 3; //이런식으로 재할당을 해야 내가 원하는 0이 나옴
console.log(q2) // 0 

//변수를 바꿀 것 같으면 let을 사용.

// 비교 연산자
// (참고) = 은 대입연산자
/* 1. == (값만 비교하는 연산자) */
console.log('== 연산자')
console.log(1 == 1)
console.log(1 == 2)
console.log(1 != 2)
console.log(1 != 1)
console.log('1' == 1)
console.log('1' != 1) 

//JS의 이상한 점
console.log(''=='0') //false
console.log(false=='0') //true
console.log(0 =='0') //true
console.log(''==0) //true
console.log(undefined == null) //true
//이렇게 0에 대해 삼단논법으로 보면 애매한 부분이 있어서 === 사용을 지향할 것

/* 2. 비교연산자 === (값과 data type까지 비교) */
console.log('=== 연산자')
console.log('1' === 1) //false
console.log(undefined === null) //false
console.log('' === 0) //false
console.log(1 === 1) //true

// 크기 비교
console.log('크기 비교')
console.log(2 > 1)
console.log(1 >= 1)
console.log(2 < 1)
console.log(2 <= 0)

console.log('----산술 연산자----')
console.log(1 + 2)
console.log(1 + 2)
console.log(1 - 2)
console.log(1 * 2)
console.log(7/2)
console.log(7%2)
console.log(7**2)

console.log('----논리 연산자-----')
console.log(!true)
console.log(!!true) //반대의 반대도 가능
console.log(!!false)
console.log(true && true) //true
// && (AND 연산자는 false일 확률이 높은 조건을 앞쪽에 배치(성능에 훨 좋음))
console.log(true && true && true && true && false) //false
console.log(false && true && true && true && true) //false

// || OR 연산자는 true일 확률이 높은 조건을 앞쪽에 배치
console.log(true || true) // treu
console.log(true || false) //true
console.log(false || false) //false

console.log(!(2>1)) //false
console.log(2>1 && -2 < 1)  //true
console.log((2>1 && -2 <1)|| 2 > 5) //true

//문자와 변수를 같이 쓰는 방법
const str1 = 'allie'
const str2='서울'
// allie는 서울에 삽니다.
/* 연산자 이용 (문자열일 때는 문자열 이어줌) */
console.log(str1+'는 ' +str2+ '에 삽니다.') // 1번
console.log(str1,'는' ,str2,'에 삽니다.') //2번
console.log(`${str1}는 ${str2}에 삽니다.`) //3번

const str3 = `${str1}는 ${str2}에 삽니다.`
const str4 = str1+'는 ' +str2+ '에 삽니다.'
console.log(str3)
console.log(str4)
//1번과 3번만 변수 할당 가능. 2번은 불가능

