// class : 오브젝트를 만들 수 있는 틀!

/* 
속성
- 만들어진 연도 year
- 집의 이름 name
- 창문의 개수 window

메소드
- 건물의 나이 출력 getAge()
- 창문의 개수 출력 getWindow()
*/

class House {
    constructor(year, name, window){
        this.name = name;
        this.year = year;
        this.window = window;
    }

    //메소드
    getAge(){
        console.log(`${this.name}은 건축한지 ${2024 - this.year}년 됐어요.`);
    }

    getWindow(){
        console.log(`${this.name}의 창문은 ${this.window}개 입니다.`);
    }
}

// const h1 = {
//     name: 'old',
//     year: 1789,
//     window: 1,
// 함수 ~~
// };

const house1 = new House(1789, 'old', 1); //이게 위에 쓴 내용과 같은 것.
house1.getAge();
house1.getWindow();
console.log(house1.name);

const house2 = new House(2015, '자이', 10);
house2.getAge();
house2.getWindow();

console.log('-----------상속------------------');
//extends 키워드를 사용해서 상속
// House 클래스의 함수와 속성을 사용할 수 있음
// House << Apartment
class Apartment extends House{
    constructor(year, name, window, floor, windowMaker){
        super(year, name, window);
        this.floor=floor;
        this.windowMaker=windowMaker;
    }

    getAptInfo(){
        return `${this.year}년에 지어진 ${this.year}.
        총 층수는 ${this.floor}, 창문의 개수는 ${this.window}`;
    }

    // overriding : 덮어쓰는 기능. get window를 재선언.
    // 부모 클래스의 메소드를 똑같이 쓰고 싶지만, 내용은 다르게 만들고 싶을 때.
    // 메소드 재선언
    
    getWindow(){
        return `${this.name}의 창문은 ${this.window}개 입니다.`;
    }

    //getAge() << 상속받아서 사용 가능.

}


console.log('*****************')
// constructor(year, name, window, floor, windowMaker)
const ap1 = new Apartment(2022, 'raemian', 19, 50, 'kcc');
console.log(ap1.getWindow());
// console.log(ap1.getWindow()); //오버라이딩 함수, 메소드 재정의
// console.log('*****************')
// console.log(ap1.getAptInfo()); //새로운 메소드 정의
// ap1.getAge(); //부모 메소드 그대로 정의
console.log(ap1);


console.log('*****************실습**********************');
class Shape {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    getArea(){
        console.log(`넓이는 ${this.width * this.height}입니다.`)
    }
}

const rec1 = new Shape(3,4);
console.log(rec1.getArea());

class Rectangle extends Shape {
    constructor(width, height){
        super(width, height);
    }

    getSqrt(){
        console.log(`대각선의 길이는 ${Math.sqrt(this.width**2 + this.height**2)}입니다.`);
    }
}

const rec2 = new Rectangle(4,5);
console.log(rec2.getSqrt());

class Triangle{
    constructor(width, height){
        this.width=width;
        this.height=height;
    }

    getArea(){
        console.log(`삼각형의 넓이는 ${1/2 * this.width * this.height}입니다.`);
    }
}
const tri = new Triangle(6,4);
console.log(tri.getArea());

class Circle extends Shape{
    constructor(width, height, radius){
        super(width, height);
        this.radius = radius;
    }

    getArea(){
        return `원의 넓이는 ${Math.PI*this.radius**2}`;
    }
}
const cir = new Circle(4,6,2);
console.log(cir.getArea());