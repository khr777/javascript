'use strict';

// Array 
// 1. Declaration 
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position 
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]); // 출력 : undefined 
// 배열의 제일 마지막 index를 출력할 때는 
// 아래와 같이 출력하기도 한다. 
console.log(fruits[fruits.length - 1]);

// 3. Looping over an array
// print all fruits
// a. for
for ( let i = 0; i < fruits.length; i++ ) {
    console.log(`${fruits[i]} : for 문`)
}

// b. for of
for ( let value of fruits ) {
    console.log(`${value} : for of`);
}

// for in
for ( let index in fruits) {
    console.log(`${fruits[index]} : 출력`);
}

// c. forEach 
// forEach는 Callback 함수를 불러온다. 
// array.forEach 함수는 Callback 함수를 호출해서 
// value, index, array를 파라미터로 전달해준다. 
fruits.forEach(function(fruit, index, array){
    console.log('Callback-----');
    console.log(fruit);
    console.log(index);
    console.log(array);
})

// 이름없는 function은 arrow function으로 표기 가능.
// 한줄 코드는 중괄호도 없이 아래와 같이 표기 가능. 
fruits.forEach((fruit, index, array) => console.log(fruit, index, array));


// 4. Addition, deletion, copy
// push: add an item to the end 
fruits.push('🍓','🍑');
console.log(fruits);

// pop: remove an item from the end 
// 제일 마지막 index가 제거된다.
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging
// 앞에서부터 배열의 값을 추가하고 싶을 때
fruits.unshift('🍒','🍍');
console.log(fruits);

// shift: remove an item from the benigging
// 제일 앞에 있는 배열의 값부터 제거가 된다.
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push 
// shift, unshift는 앞에서부터 데이터를 관리하기 때문에 전체 데이터가 이동하게 된다.
// 그래서 비추. pop, push 사용 권장. 

// splice: remove an item by index position 
fruits.push('🥝','🍇');
console.log(fruits);

// fruits.splice(1); // start: index, 몇개를 지울지 입력하지 않으면 
                    // 입력한 index부터 끝까지 다 지워버린다.
fruits.splice(1, 1);
console.log(fruits);


// 배열의 데이터를 삭제함과 동시에 삭제한 index에 값을 추가할 수 있다.
fruits.splice(1, 1, '🍉', '🍈');                    

// combine two arrays
// 두 배열을 묶어서 만들 수 있다.
const fruits2 = ['🍊','🍋'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching 
// indexOf: find the index
console.log(fruits.indexOf('🍇'));

// 검색하려는 데이터가 배열에 포함되어 있는지 true, false로 알려준다.
// includes
console.log(fruits.includes('🍎'));
console.log(fruits.includes('🥝'));

// 배열 안에 존재하지 않는 데이터의 인덱스를 검색하려는 경우 
// -1 을 return
console.log(fruits.indexOf('🍎'));

// lastIndexOf 
console.clear();
fruits.push('🍍');
console.log(fruits);

// indexOf 는 중복값이 있을 때 가장 앞쪽에 있는 index를 알려준다.
console.log(fruits.indexOf('🍍'));

// lastIndexOf 
// 배열 안에 중복되는 값이 있을 경우, 
// lastIndexOf 함수는 가장 마지막에 있는 데이터의 index를 출력한다. 
console.log(fruits.lastIndexOf('🍍'));