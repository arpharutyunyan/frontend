// ------------------ 1 ------------------
function compare(num) {
    return function (comparable_number) {
        if (num > comparable_number) {
            return 'big';
        } else if (num < comparable_number) {
            return 'small';
        } else {
            return 'equal';
        }
    };
}

let comp = compare(20);
console.log(comp(10));
console.log(comp(20));
console.log(comp(30));

// ------------------ 2 ------------------
function factorial(num) {
    if (num === 0 || num === 1) {
        return num;
    }

    return num * factorial(num - 1);
}

let result = factorial(5);
console.log(result);

// ------------------ 3 ------------------
// function fibonacci(number) {
//
//     if (number === 1) {
//         return 0;
//     } else if (number === 2) {
//         return 1;
//     }
//
//     return fibonacci(number - 1) + fibonacci(number - 2);
// }
//
// let fibonacci_index = 8;
// let fibonacci_result = '';
// if (fibonacci_index > 0) {
//     for (let i = 1; i <= fibonacci_index; i++) {
//         if (i === fibonacci_index) {
//             fibonacci_result += fibonacci(i) + '. ';
//         } else {
//             fibonacci_result += fibonacci(i) + ', ';
//         }
//     }
// } else {
//     fibonacci_result = 'no fibonacci number\'s list index';
// }
//
//
// console.log(fibonacci_result);

let fibonacci_result = '0, 1, ';
let a = 0;
let b = 1;

function fibonacci(index) {
    if (index <= 0) {
        fibonacci_result = 'no fibonacci number\'s list index';
    } else if (index === 2) {
        return;
    } else {
        let sum = a + b;
        if (index === 3) { // last index should be 3, first 2 element(0, 1) already shown
            fibonacci_result += `${sum}.`;
        } else {
            fibonacci_result += `${sum}, `;
        }
        a = b;
        b = sum;
        fibonacci(index - 1);
    }
}

console.log(fibonacci_result);