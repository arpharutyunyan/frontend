// ----------------- 1 -----------------
var numberOne = 35;
var numberTwo = 25;

console.log('numberOne = ' + numberOne);
console.log('numberTwo = ' + numberTwo);

if (numberOne > numberTwo) {
    console.log('numberOne is greater than numberTwo');
} else if (numberOne < numberTwo) {
    console.log('numberOne is smaller than numberTwo');
} else {
    console.log('numberOne is equal numberTwo');
}

// ----------------- 2 -----------------
var languageCode = 'hy';
console.log('languageCode = ' + languageCode);

if (languageCode === 'en') {
    console.log('Hello, World');
} else if (languageCode === 'es') {
    console.log('Hola, Mundo');
} else if (languageCode === 'fr') {
    console.log('Bonjour tout le monde');
} else {
    console.log('Unknown Language');
}

var ternaryResult = languageCode === 'en' ? 'Hello, World' :
                    languageCode === 'es' ? 'Hola, Mundo' :
                    languageCode === 'fr' ? 'Bonjour tout le monde' :
                    'Unknown Language';

console.log('ternaryResult: ' + ternaryResult);

// ----------------- 3 -----------------
var firstNumber = parseFloat(prompt('Input first number'));

if (!isNaN(firstNumber)) {

    var secondNumber = parseFloat(prompt('Input second number'));

    if (!isNaN(secondNumber)) {

        var result;
        var operator = prompt('Input operator from this list (+, -, /, *)');

        switch (operator) {
            case '+':
                result = firstNumber + secondNumber;
                break;
            case '-':
                result = firstNumber - secondNumber;
                break;
            case '*':
                result = firstNumber * secondNumber;
                break;
            case '/':
                if (secondNumber !== 0) {
                    result = firstNumber / secondNumber;
                } else {
                    result = 'Division by zero is not allowed';
                }
                break;
            default:
                result = 'Invalid operator';
        }

        console.log(result);

    } else {
        console.log('Invalid input for the second number');
    }

} else {
    console.log('Invalid input for the first number');
}
