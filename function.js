console.clear();
'use strict';
function helloPrint() {
    console.log('Hello');
}

helloPrint();

function log(message) {
    console.log(message);
}

log('안녕하세요.');

// Object는 reference에 할당된다.
function changeName(obj) {
    obj.name = 'coder';
}

const ellie = { name: 'ellie'};
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('HI');

// 4. Rest parameters (added in ES6)
function printAll(...args) {
    
    // for ( let i = 0; i < args.length; i++ ) {
    //     console.log(args[i]);
    // }

    // args의 배열을 차곡차곡 하나씩 arg에 담는 반복문.
    for ( const arg of args ) {
        console.log(arg);
    }

    // 또 다른 방법(함수형 언어)
    args.forEach((arg) => console.log(arg + ' : foreach test'));
}
printAll('dream', 'coding', 'ellie');


// 6. Early return, early exit
// 조건에 맞지 않는다면 빠르게 return 해버린다.
function upgradeUser(user) {
    if ( user.point <= 10 ) {
        return;
    }
    // long upgrade logic....
} 


const print = function() { // anonymous function // 함수에 이름을 붙일 수도 있다. 
    console.log('print');
}



// Callback function(함수 안에서 조건에 맞는다면 실행할 함수들)
function randomQuiz(answer, printYes, printNo) {
    if ( answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

// anonymous function 
const printYes = function() {
    console.log('Yes');
}

// named function 
// debugging을 할 때 유리하다. 
const printNo = function print() {
    console.log('No');
}

randomQuiz('love you', printYes, printNo);
randomQuiz('wrong', printYes, printNo);


// arrow function 
// always anonymous 
const simplePrint = function () {
    console.log('simplePrint');
}

const simplePrint2 = () => console.log('simplePrint2');
simplePrint2();
const add = (a, b) => a + b;
console.log(add(1, 1));

// IIFE : Immediately Invoked Function Expression 
// 괄호를 해주고 함수를 호출하듯 괄호를 해주면 함수를 정의하자마자 바로 호출된다. 
(function hello() {
    console.log('hello');
})();

