// 1. if문
// if(조건식){ //조건이 참일 때 실행할 문장}
if(5>3) console.log('5가 3보다 커요');

//콘솔로그 한 줄만 있으면 중괄호 안 써도 됨. 단, 여러줄이면 중괄호{}로 묶어야 함.

// let number = prompt('숫자 입력');
//prompt 쓰면 숫자로 형변환 필수!!
// number = Number(number);

// console.log(typeof number)

//if ~else
let number = 88;
if(number > 10){
    console.log('숫자가 10보다 큽니다.')
}else{
    alert('10보다 작거나 같아요')
}

//if ~ else if ~ else
if(number > 10){
    console.log('10보다 큽니다.')
}else if(number === 10){
    console.log('10입니다.')
}else{
    console.log('10보다 작습니다.')
}


let age = 15;
if(age >= 20){
    console.log('성인')
}else if(age >= 17){
    console.log('고등학생')
}else if(age >= 14){
    console.log('중학생')
}else if(age >= 8){
    console.log('초등학생')
}else if(age >= 0){
    console.log('유아')
}

//2. switch~case 문
/*
    - switch의 괄호안과 case의 조건에는 비교식이 들어가지고 않고, 값 자체가 들어감.
    - 자바스크립트에선 조건이 많을 때 swtich를 쓰는 게 근소하게 성능에 유리함.
*/
let a= 6;
switch(a){
    case 3:
        console.log('3입니다.');
        break;
    case 4:
        console.log('4입니다.');
        break;
//break를 써주지 않으면, case 4를 출력하고 싪을 때,
//case 5까지 모두 실행됨(스코프{중괄호}에서 빠져나가지 못함)
    case 5:
        console.log('5입니다.');
        break;
    default:
        console.log('어떤 값인지 모르겠어요.');
        break;
}
//default를 안 쓰면 아무값도 안 나옴. break를 안 쓰면 다음 조건까지 실행됨. 

let score = 100
/* 
if문으로 
90 <= A <= 100
80 <= B < 90
70 <= C < 80
60 <= D < 70
F < 60
*/

if(score > 100 || score <0){
    console.log('잘못된 점수입니다.')
}else if(score >= 90){
    console.log('A')
}else if(score >= 80){
    console.log('B')
}else if(score >= 70){
    console.log('C')
}else if(score >= 60){
    console.log('D')
}else{
    console.log('F')
}

console.log(parseInt(score/10))
switch(parseInt(score/10)){
    case 10:
    case 9:
        console.log('A');
        break;
    case 8:
        console.log('B');
        break;
    case 7:
        console.log('C');
        break;
    case 6:
        console.log('D');
        break;
    default:
        console.log('F');
        break;
}
    
/**
 3. 삼항연산자
 조건식 ? 조건식이 true일 때 : 조건식이 false일 때
 */
let num = 5;
if(num % 2 === 1){
    console.log('홀수');
}else{
    console.log('짝수');
}

num % 2 === 1 ? console.log('홀수'):console.log('짝수');

const now = new Date().getHours();
now <= 11 ? console.log('오전'): console.log('오후');

