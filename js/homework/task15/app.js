class Car {
    constructor(model, speed, productYear) {
        this.model = model;
        this.speed = speed;
        this.productYear = productYear;
    }

    #productYear = 2000; //default year
    set productYear(productYear) {
        if ((typeof productYear) === 'number') {
            this.#productYear = productYear;
        }
    }

    get ProductYear() {
        return this.#productYear;
    }

    get Year() {
        return 2023 - this.#productYear;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.model} is going at ${this.speed}km/h`);
    }

    brake(num) {
        this.speed -= num;
        console.log(this.model + ' is going at ' + this.speed + 'km/h');
    }

    static signal(){
        console.log('Signaling .....');
    }
}

const mercedesCar = new Car('Mercedes-Benz', 120, 2015);
const bmwCar = new Car('BMW', 150, '2012');
console.log(mercedesCar);
console.log(bmwCar);
console.log(mercedesCar.ProductYear);
console.log(bmwCar.ProductYear);
console.log(mercedesCar.Year);
console.log(bmwCar.Year);
mercedesCar.accelerate();
mercedesCar.brake(5);
bmwCar.accelerate();
bmwCar.brake(5);
Car.signal();


class ElectricCar extends Car {
    constructor(model, speed, productYear, charge) {
        super(model, speed, productYear);
        this.charge = charge;
    }

    chargeBattery() {
        let difCharge = 100 - this.charge;
        while (difCharge) {
            difCharge -= 1;
            this.charge += 1;
            console.log(this.charge + '%');
        }

        console.log('100%. Battery charged successfully!');

    }
}

const teslaCar = new ElectricCar('Tesla Model 3', 120, 2020, 75);
console.log(teslaCar);
console.log(teslaCar.charge);
teslaCar.chargeBattery();
console.log(teslaCar.charge);
console.log(teslaCar.ProductYear);
console.log(teslaCar.Year);
ElectricCar.signal();
