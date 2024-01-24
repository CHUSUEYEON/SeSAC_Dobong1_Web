/*
 모듈 만드릭( common JS qktlr)
 exports 라는 키워드 사용해서 보내기
 한번에 내보내기
*/

const colors = ['#fff', '#ddd', 'red'];

const sayHi=()=>{
    console.log('hi');
}

function sayName(name){
    console.log('my name is', name);
    sayHi();
}

// sayName('진형');
module.exports = {
    colors,
    sayName
}