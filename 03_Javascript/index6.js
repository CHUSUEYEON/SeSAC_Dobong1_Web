/* 1. for문
for(변수 선언과 초기값 할당; 조건식(어디까지 증가? 감소?); 증감식){
    반복할 코드;
}
*/

for(let i = 0;i < 10; i= i + 1){
    console.log('안녕', i)
}
//i = i + 1 하고 i++랑 같음

for(let i = 0; i < 10; i+= 2){
    console.log(`안녕하세요 ${i}`);
}

for(let i = 1; i <= 5; i++){
    console.log(i);
}
for(let i = 1; i < 6; i++){
    console.log(i);
}
for(let i = 1; i < 5; i++){
    console.log(i+1);
}
//같은 결과값이지만 다양한 포문 작성 가능하다는 것도 알아둘 것.

//감소
for(let i = 5; i > 0; i--){
    console.log(i)
}

//1부터 n까지의 덧셈
let n = 11;
let sum1 = 0;
// for(let sum1 = 1; sum1 < 12; sum1 = sum1 + sum1){
//     console.log(sum1);
// }

console.log('================')
// sum1 = 0 + 1+2+3... + n(11)
for(let i = 1; i < n + 1; i++){
    console.log(i);
    // sum1 = 0 + 1
    // sum1 = 0 + 1 + 2
    // sum1 = 0 + 1 + 2 + 3 ... + n
    // sum1 = sum1 + i;
    sum1 += i;
}

console.log(sum1);

/* 배열과 함께 사용하는 for문*/
let fruits = ['사과', '망고', '오렌지', '망고스틴'];
console.log(fruits.length) // 배열의 길이 확인
for(let i = 0; i < fruits.length; i++){
    console.log('I like', fruits[i]);
}

//배열 요소의 합 구하기
let numsArr = [99,98,99,85,77];
let sum2=0;

for(let i = 0; i < numsArr.length; i++){
    console.log(i);
    // sum2 = 0 + 99
    // sum2 = 0 + 99 + 98
    // sum2 = 0 + 99 + 98 + 97
    sum2 = sum2 + numsArr[i];
}
console.log(sum2);

/* 2. while 문
초기화식;
while(조건식){
    조건이 참일 때 실행할 문장;
    증감식;
}*/

let n2 = 1; //초기화식
while(n2 <= 5){ // 조건식
    console.log(n2); //실행문
    n2++; //증감식
}

console.log('-----')
n2 = 10;
while(n2 > 4){
    console.log(n2);
    n2-- ;
}

//1~10 짝수만 출력. while문 이용

n2 = 1;
while(n2 <= 10){
    if(n2%2===0){
        console.log(n2);
    }
    n2++;
}

//10부터 1까지 감소하는데 홀수만 출력. while

n2 = 10;
while(n2 >= 1){
    if(n2%2===1){
        console.log(n2);
    }
    n2--;
}

console.log('----------')
let b =0 ;
while(true){
    b++;
    console.log(b);
    if(b > 10)break;
}
//증감식 위치 중요 115에 잇으면 11까지. 116행에 있으면 10까지

console.log('-----')
let sum3 = 0;
for(let i = 0; i < 10; i++){
    if(i%2===0) continue;
    //i%2===0일 때 반복하지 않고 다음 반복으로 넘김

    sum3 += i;
}
console.log(sum3)

let n3 = 0;
while(confirm('계속 진행할까요?')){
    n3++;
    alert(`${n3}번째 alert 창`)
}

//confirm : 확인 누르면 true, 취소 누르면 false
//alert는 확인 버튼만 있고, confirm은 확인/취소 둘 다 있음
//prompt는 Input개념. 그리고 어떤 형태의 입력값을 넣어도 다 문자열로 나오니 
//원하는 데이터형이 있다면 반드시 형변환 진행할 것.

console.log("-------------------")
for(i=0;i<10000;i++){
    if(i%13===0 && i%2===1){
        console.log(i)
    }
}

console.log("-------------------")
let n4=prompt();
while(n4<10000){
    if(n4%13===0 && n4%2===1){
        console.log('n4는 13의 배수면서 홀수입니다.');
    }
    n4++;
}

console.log('-----------------')
for(i=2; i<10; i++){
    console.log('---i단---')
    for(n=1;n<10;n++){
        console.log(i,'X', n,'=',i*n)
    }
}

let sum5=0;
i = 0;
while(i<=100){
    if(i%2===0 || i%5===0){
        console.log(i);
    }
    sum5 = sum5 + i;
    i++;
}
console.log(sum5)