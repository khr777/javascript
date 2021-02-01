let one = 3;
console.log(one); // 3
let two = ++one;
console.log(two); // 4
let three = one++; 
console.log(three); // 


let nameValue = 'success';

switch ( nameValue ) {
    case 'test':
    case 'success':
        console.log('Bingo');
        break;
    case 'fail':
        console.log('Fail');
        break;
}


let i = 3;
while ( i > 0 ) {
    console.log(`while: ${i}`);
    i--;
}

do {
    console.log(`do while : ${i}`);
    --i;
} while ( i > 0 );



for ( let i = 0; i <= 10; i++ ) {
    if ( i % 2 !== 0 ) {
        continue;
    }
    console.log(`i는 짝수 : ${i}`);
}

for ( let a = 0; a <= 10; a++ ) {
    if( a == 8 ) {
        break;
    }
    console.log(a);
}
