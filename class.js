'use strict';
// 객체 지향 프로그래밍
// class : template
// object : instance of a class 

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    speak() {
        console.log(`${this.name} : hello !`);
    }
}

const ellie = new Person('ellie', 30);
console.log(ellie.name);
console.log(ellie.age);

ellie.speak();



// 두번째
class User {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    // getter, setter를 사용할 때는 stack 초과되지 않도록 _를 사용한다.
    set age(value) {
        // if ( value < 0 ) {
        //     throw Error('age can not be negative');
        // }

        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'job', -1);
console.log(user1.age);

// Field (public, private)
// #을 붙이면 private 변수가 된다.
class Experiment {
    publicField = 2;
    #privateField = 0;
    constructor() {
        console.log(`${this.#privateField} : private`);
    }
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// static 사용법 
class Article {
    static publisher = 'dream coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }
    // static은 객체가 아닌 클래스에 값이 정해지는.
    // 클래스 안에서도 클래스명을 붙여 사용해야 한다.
    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(`----${Article.publisher}`);
Article.printPublisher();



// 상속, 다양성 
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw() {
        super.draw(); // 부모의 함수 속성을 함께 사용하고 싶을 때.
        console.log('🔺');
    }
    // 오버라이딩
    getArea() {
        return ( this.width * this.height ) / 2;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
const triangle = new Triangle(20, 20, 'pink');
triangle.draw();
console.log(triangle.getArea());


// Class checking: instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);