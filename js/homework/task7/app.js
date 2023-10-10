let carOne = {};
carOne.brand = 'Toyota';
carOne.year = 2015;
carOne.price = 10000;

let carTwo = {
    'brand': 'Toyota',
    'year': 2022,
    'price': 25000,
};

function print(obj){
    for(let key in obj){
        console.log(`${key}: ${obj[key]}`);
    }
}

print(carOne);
print(carTwo);

carOne.show = function (){
    console.log(`${this.brand}: ${this.price}`);
};
// console.log(carOne);
carOne.show();

function showCar(){
    console.log(`${this.brand}: ${this.price}`);
}

carTwo.show = showCar;
// console.log(carTwo);
carTwo.show();

function showCarDetails(){
    return `Car Object:
    year: ${this.year},
    brand: ${this.brand},
    price: ${this.price}`;
}

let carOneCall = showCarDetails.call(carOne);
console.log(carOneCall);
let carTwoCall = showCarDetails.call(carTwo);
console.log(carTwoCall);