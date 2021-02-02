'use strict';


// 1. Literals and properties
// Object 
// object = { key : value };
// object는 key와 value의 집합체이다. 
const obj1 = {};   // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax 

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

// 자바스크립트에서는 클래스가 없어도 이렇게 괄호로 객체를 생성할 수 있다. 
const ellie = { name: 'ellie', age: 20 };
print(ellie);

// ellie 객체에 property 추가 가능.
// 그러나 추천하지는 않는다. 빠르게 코딩할 수 있으나 유지관리가 상당히 어렵다.
ellie.hasJob = true;
console.log(ellie.hasJob);

// property 삭제 가능. 
delete ellie.hasJob;
console.log(ellie);
console.log(ellie.hasJob);  //undefined 



// 2. Computed properties 
// 실시간으로 원하는 데이터를 받아오고 싶을 때 사용한다. 
// key should be always string
console.log(ellie.name);
console.log(ellie['name']);
console.log(ellie[name]); // undefined 
// object property 추가 가능 
ellie['hasJob'] = true;
console.log(`${ellie['hasJob']} : add`);

function printValue(obj, key) {
    console.log(obj[key]);
}

printValue(ellie, 'name');



// 3. property value shorthand
const person1 = { name: 'gildong', age: 30};
const person2 = { name: 'soon', age: 11};
const person3 = { name: 'cong', age: 22};
const person4 = makePerson('king', 30);

console.log(person4);

function makePerson( name, age ) {
    return {
        name,
        age
        /*
        name: name,
        age: age
        속성명이 같으면 위와 같이 생략 가능*/ 
    }
}


// 4. Constructor Function 
function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}
// 이렇게하면 자바스크립트가 알아서 객체를 생성해준다. 
// 자바스크립트에서 class를 사용하기 전에 객체를 관리하던 방법. 
const person5 = new Person('hong', 30);

// 5. in operator : property existence check (key in obj)
// 간단하게 key가 있는지 없는지 확인할 수 있는.
console.log('name' in ellie);   // 출력 : true  
console.log('age' in ellie);   // 출력 : true  
console.log('random' in ellie);   // 출력 : false 
console.log(ellie.random); //출력 : undefined  



const dong = makePerson('dong', 30);
// 6. for..in vs for..of 
// for ( key in obj )
/*
for ( key in dong ) {
    console.log(key);
}

console.log('???????');
// for ( value of iterable)
const array = [ 1, 2, 3, 4, 5];
for ( value of array ) {
    console.log(value);
}
*/



// fun cloning 
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: 30};
const user2 = user;
user2.name = 'gildong';
console.log(user.name);

// old way 
const user3 = {};
/* 
for ( key in user ){
    user3[key] = user[key];
}
*/
console.log(user3);


console.log('why??????')
// Object.assign
const user4 = {};
Object.assign(user4, user);
console.log(user4);

const user5 = Object.assign({}, user);
console.log(user5);


// another example
const fruit1 = { color: 'red'};
const fruit2 = { color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
// 뒤에 나올수록 앞에 property를 덮어 쓴다. 
console.log(mixed.color);   // 출력 : blue
console.log(mixed.size);   // 출력 : big
