// ---------- 1 ----------
function getEmptyElementsCount(arr){
    const min = getMinValue(arr);
    const max = getMaxValue(arr);

    return max - min + 1 - arr.length;
}

console.log(getEmptyElementsCount([6, 2, 3, 8]));
console.log(getEmptyElementsCount([0, 3]));
console.log(getEmptyElementsCount([5, 4, 6]));
console.log(getEmptyElementsCount([6, 3]));
console.log(getEmptyElementsCount([10, 6, 3, 1, 7]));

// function markEmptyPositions(arr){
//     const sortedArr = arr.slice().sort((a, b) => a - b);
//     const newArr = [];
//     for(let i=0; i<sortedArr.length; i++){
//         newArr.push(sortedArr[i]);
//         let diff = sortedArr[i+1] - sortedArr[i];
//         if(diff > 1){
//             for(let j=0; j<diff-1; j++){
//                 newArr.push('-');
//             }
//         }
//     }
//
//     return newArr;
// }

function markEmptyPositions(arr){
    const newArr = [];
    const max = getMaxValue(arr);
    const min = getMinValue(arr);

    for(let i=min; i<=max; i++){
        if(arr.includes(i)){
            newArr.push(i);
        }else{
            newArr.push('-');
        }
    }

    return newArr;
}

console.log(markEmptyPositions([6, 2, 3, 8]));
console.log(markEmptyPositions([0, 3]));
console.log(markEmptyPositions([5, 4, 6]));
console.log(markEmptyPositions([6, 3]));
console.log(markEmptyPositions([10, 6, 3, 1, 7]));


function getMaxValue(arr){
    let max = arr[0];
    for(let i=1; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }

    return max;
}

function getMinValue(arr){
    let min = arr[0];
    for(let i=1; i<arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }

    return min;
}

/*
var item = ["Egg", 0.25, 12];
var name = item[0];
var price = item[1];
var quantity = item[2];
console.log("Item: " + name + "\nQuantity: " +  quantity + "\nPrice: " + price);
*/

const item = ["Egg", 0.25, 12];
let [ name, price, quantity ] = item;
console.log(
`Item: ${name}
Quantity: ${quantity}
Price: ${price}`
);

/*
var numbers = [3, 5, 4, 2, 6, 1];
var one = numbers[0];
var two = numbers[1];
var three = numbers[2];
var four = numbers[3];
var five = numbers[4];
var six = numbers[5];
console.log("One: " + one, "Two: " + two, "Three: " + three, "Four: " + four, "Five: " + five, "Six: " + six);
*/

const numbers = [3, 5, 4, 2, 6, 1];
let [
    one,
    two,
    three,
    four,
    five,
    six
] = numbers;

console.log(`One: ${one}, Two: ${two}, Three: ${three}, Four: ${four}, Five: ${five}, Six: ${six}`);

/*
var computer = {
    modelName: "Apple MacBook Air",
    year: 2022,
    price: "1200$",
    techSpecs: {
        CPU: "Apple M2 chip",
        RAM: "8GB",
        hasHardDisk: false,
        solidStateDriven: 500
    }
};
var hasHardDisk = computer && computer.techSpecs &&
computer.techSpecs.hasHardDisk ? computer.techSpecs.hasHardDisk : false;
var year = computer.year;
var price = computer.price;
var ssd = computer.techSpecs.solidStateDriven;
*/

const computer = {
    modelName: "Apple MacBook Air",
    year: 2022,
    price: "1200$",
    techSpecs: {
        CPU: "Apple M2 chip",
        RAM: "8GB",
        hasHardDisk: false,
        solidStateDriven: 500
    }
};

let hasHardDisk = computer?.techSpecs?.hasHardDisk ?? false;
let {
    year,
    price: computerPrice, //above already has price variable
    techSpecs: {solidStateDriven: ssd}
} = computer;

console.log(`Year: ${year}, Price: ${computerPrice}, SSD: ${ssd}`);

/*
var computer = {
    modelName: "Apple MacBook Air",
    year: 2022,
    price: "1200$",
};
function showComputerInfo(data) {
    return "Brand: " + data.modelName + "," +
        " Year: " + data.year + "," +
        " Price " + data.price + ".";
}
showComputerInfo(computer);
*/

const computerMacBook = {
    modelName: "Apple MacBook Air",
    year: 2022,
    price: "1200$",
};

// const showComputerInfo = (data) => {
//     const { modelName, year, price } = data;
//     return `Brand: ${modelName}, Year: ${year}, Price ${price}.`;
// }

const showComputerInfo = ({ modelName, year, price }) => {
    return `Brand: ${modelName}, Year: ${year}, Price ${price}.`;
}

console.log(showComputerInfo(computerMacBook));