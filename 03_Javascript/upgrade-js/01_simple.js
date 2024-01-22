// 구도 분해 할당
// 1. 배열의 구조분해 할당
const arr =['tomato', 'kiwi', 'banana'];
console.log(arr[2]);
const [to, ki, ba] = arr;
console.log(ki);

const arr2 = ['빨', '주', '노', '초'];
const [red, orange, ,green] =arr2;
console.log(red, green);

let x = 'first';
let y = 'second';
[x,y] = [y,x];
console.log(x,y);

let x2 = 'first';
let y2 = 'second';
let temp;
temp=x2;
x2=y2;
y2=temp;

// 2. 객체의 구조분해 할당
const obj = {
    title: '제목',
    content: '내용',
    number: 0,
};

console.log(obj.title);

// const {number, title, content} = obj//순서 상관없음
// console.log(title);

const {number, title: t2, content} = obj// 이런식으로 줄일 (?) 수 있음
console.log(t2);

// 전개구문 ...
const arr3 = [1,2,3,4,5];
const arr4 = ['a','b','c'];

console.log(arr3);
console.log(arr4);

for(let el of arr3){
    console.log(el);
}

console.log(...arr3); // 1 2 3 4 5

// [1,2,3,4,5, 'a', 'b', 'c'];
const arr5 = arr3.concat(arr4);
const arr6 = [...arr3, ...arr4];
console.log('-----------------');
console.log(arr5);
console.log(arr6);

const str = "aliiehigh";
let strToArr = [...str];
let strToArr2 = str.split("");
console.log(strToArr);
console.log(strToArr2);

// object spread
const me1 = {
    name: 'allie',
    height:163,
    friend:null,
    married:false,
}

const me2 = {
    name:'진형',
    like:['코딩하기', '놀러가기'],
    greeting:function(){
        console.log(`안녕하세요. 제 이름은 ${this.name}이고요, 키는 ${this.height} 입니다.`);
    }
};

let me = {...me1, ...me2};
console.log(me); //이름은 진형으로 나옴. 같은 키가 있을 경우 뒤에 쓰여있는 게 나옴.
me.greeting(); //me2에는 키가 없으나 me에 연결해놔서 함수에 있는 내용이 나옴.

const word1='abc';
const word2='xyz';

let word = [...word1, ...word2];
const wordArr = (word1+word2).split('');
const wordArr2 = word1.split('').concat(word2.split('')); //이렇게 다양한 방식으로 배열을 합칠 수 있음
console.log(word);

//rest
const obj2 = {
    title: '제목',
    content: '내용',
    number: 0,
    key4:'value4',
    key5:'value5',
};

const {title:a, content:b, number:c, ...obj3} = obj2; //obj3에 나머지가 새로운 오브젝트로 들어감(이렇게 한번에 저장하고 싶을 대 rest를 사용)
console.log(obj3);

console.log("========================================");
function test(...valuue){
    console.log(valuue);
    const [a, b, ...rest] = valuue;
    console.log(a);
    console.log(b);
    console.log(rest);
};// 첫번째에 a, 두번째에 b, 세번째에 나머지 전부 다 저장되게 함.
test(1,2,3,4,5,6);

console.log("***************************************")

// quiz
// 매개변수가 몇개가 들어오든 합산해주는 함수 addNumber()
function addNumber(...rest){
    // console.log(rest);
    // rest = [1,2,3,4,5]; rest는 배열로 만들어지고, 그 rest의 합을 구하는 코드를 짜주면 됨.

    let sum = 0;
    rest.forEach((el)=> {
        sum += el;
    })

    return sum;
    
}
addNumber(1,2,3,4,5);
let result = addNumber(1,2,3,4,5,6,7); //28
console.log(result)