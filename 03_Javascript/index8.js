/**
 Date 객체
    - 현재 시간, 날짜에 대한 정보를 얻기 위해 사용
    - 원하는 값으로 초기화 가능
 */
let now = new Date()
console.log(now)
// console.log(new Date('날짜 문자열'))
console.log(new Date('September 30, 2000 13:00:00'))
console.log(new Date(2002,3,2,1,1,20))


console.log(now.getFullYear(), '년');
console.log(now.getMonth(), '월'); //0~11 (0이 1월 11이 12월)
console.log(now.getDate(), '일'); //며칠? 
console.log(now.getHours(), '시'); //시간(0~23)
console.log(now.getMinutes(), '분'); //분(0~59)
console.log(now.getSeconds(), '초'); //초(0~59)
console.log(now.getMilliseconds(), '밀리초'); //초(0~999)
console.log(now.getDay(), '요일'); //(0~6) 일: 0, 월:1, ... , 토: 6

// Math 객체
 console.log(Math.PI); //파이
 console.log(Math.E); //자연로그 e
 console.log(Math.SQRT2); //루트 2

 //메소드
 console.log(Math.min(1,2,3,4,5,6,7,8,9, -4, -9.3));
console.log(Math.max(2,34,5,6,77,8,30));
console.log(Math.ceil(5.11)); //올림
console.log(Math.floor(-5.11)); //내림
console.log(Math.round(5.4));//반올림
// 0<= X < 1
console.log(Math.random()); //0~1사이의 랜덤수
// 0 <= X < 3
console.log(Math.floor(Math.random() * 3));

// 0 <= X < 45
// 1 <= X < 46
console.log(Math.floor(Math.random() * 45) + 1);

// object 관련 객체
const areaNum = {
    Seoul:'02',
    Incheon:'032',
    Busan:'051',
    Ulsan:'052',
    Gwangju:'062',
    Jeju:'064'
}

const obj = new Object({
    a: '10',
    b: '55'
})

console.log(obj);

//각각 key와 value를 뽑아서 배열로 반환하는 객체의 메소드
const area = Object.keys(areaNum);
const number = Object.values(areaNum);

console.log(area);
console.log(number);


console.log('----실습----');
let Today = new Date()
console.log(Today.getDay());

if(Today === 0 || Today === 6){
    console.log('주말');
}else{
    console.log('평일');
}

console.log(Math.floor(Math.random() * 11));