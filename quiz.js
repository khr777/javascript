function calculate(command, a, b ) {
    switch ( command ) {
        case 'add':
            console.log(a + b);
            break;
        case 'minus':
            console.log(a -b);
            break;  
        default:
            throw Error('input again');
    }
}

let num = calculate('minusffff', 1, 2);