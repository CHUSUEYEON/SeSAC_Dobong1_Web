let number: number = 1;
console.log(number);
// number = "string"; // string 타입은 number 타입으로 할당될 수 없음

// 기본 타입(primitive)
let str: string = "str";
let isTrue: boolean = true;
let undef: undefined;
let empty: null = null;

// objective
let numArr: number[] = [1, 2, 3, 4, 5];
let strAtt: Array<string> = ["a", "b", "c"]; // 이와 같이 배열 선언에 두 가지 방식이 있음

// number or string 타입이 올 수 있는 배열 arr1
const arr1: (number | string)[] = [1, 2, 3, "a", "b", "c"];

// boolean, null, number 가 올 수 있는 배열 arr2
const arr2: Array<boolean | null | number[]> = [null, true, false, [1, 2, 3]];

// 어떤 자료형이든지 상관없는 배열
const arr3: any = [1, 2, 3, 4, true, null, "anything", [], {}];

// object
let obg1 = {
  name: "allie",
  age: 11,
};
