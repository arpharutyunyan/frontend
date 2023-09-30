//  --------------------- 1 ---------------------
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

var result = describeCountry('Finland', '6', 'Helsinki');
console.log(result);

result = describeCountry('Germany', 83, 'Berlin');
console.log(result);

result = describeCountry('Japan', 126, 'Tokyo');
console.log(result);

//  --------------------- 2 ---------------------
function customTypeOf(data) {
    return typeof data;
}

var customType = customTypeOf(5);
console.log('5 => ', customType);

customType = customTypeOf('aaa');
console.log('aaa => ', customType);

customType = customTypeOf(NaN);
console.log('NaN => ', customType);

customType = customTypeOf(customTypeOf);
console.log('customTypeOf() => ', customType);

//  --------------------- 3 ---------------------
function calculatePercentage(num, percent) {
    return num * percent / 100;
}

var percentOfNumber = calculatePercentage(100, 20);
console.log(percentOfNumber);

percentOfNumber = calculatePercentage(1000, 45);
console.log(percentOfNumber);

percentOfNumber = calculatePercentage(200, 10);
console.log(percentOfNumber);

//  --------------------- 4 ---------------------
function checkNumber(num) {
    if (num % 2) {  // num%2==1
        return 'Odd';
    }

    return 'Even';

    // return num % 2 ? 'Odd' : 'Even';
}

var resultCheckNumber = checkNumber(5);
console.log(5, resultCheckNumber);

resultCheckNumber = checkNumber(4);
console.log(4, resultCheckNumber);

resultCheckNumber = checkNumber(0);
console.log(0, resultCheckNumber);

//  --------------------- 5 ---------------------
function getBiggestNumber(firstNum, secondNum, thirdNum) {
    var max = firstNum;

    if (secondNum > max) {
        max = secondNum;
    }

    if (thirdNum > max) {
        max = thirdNum;
    }

    return max;
}

var maxNumber = getBiggestNumber(5, 6, 1);
console.log('5, 6, 1 => ', maxNumber);

maxNumber = getBiggestNumber(5, 4, -1);
console.log('5, 4, -1 => ', maxNumber);

maxNumber = getBiggestNumber(0, -102, 1002);
console.log('0, -102, 1002 => ', maxNumber);

maxNumber = getBiggestNumber(-260, -102, -26.5);
console.log('-260, -102, -26.5 => ', maxNumber);

maxNumber = getBiggestNumber(5, 5, 5.0);
console.log('5, 5, 5.0 => ', maxNumber);