// 모듈 사용 - import 키워드 이용
// 객체로 가져오는 방법(따로따로)
// import{flr, getFlr} from './04_export1'; 

// import * as from './04_export1';
// // console.log(flr);
// // console.log(getFlr(2));
// // console.log(getFlr(3));

// console.log(flowers);
// console.log(flowers.flr);
// console.log(flowers.getFlr(1));
// import * as from './04_export1' //한번에 가져온 거

import { showAnimals, animals } from './04_export2.js';
console.log(animals);
showAnimals();

import sayHi from './05_exportdefault.js';
sayHi();