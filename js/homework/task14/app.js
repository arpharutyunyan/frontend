/*
1.1 Ստեղծել ֆունկցիա(constructor) Car անունով:
1.2 Նոր ստեղծվող օբյեկտը պետք է ունենա model, speed հատկությունները, որտեղ model-ը մեքենայի մակնիշն է, իսկ speed-ը արագությունը:
1.3 Car ֆունկցիա(constructor)-ի միջոցով ստեղծել 2 նոր օբյեկտ:
1.4 Օբյեկտները ցույց տալ կոնսոլում:
*/
function Car(model, speed){
    this.model = model;
    this.speed = speed;
}

const mercedesCar = new Car('Mercedes-Benz', 120);
const bmwCar = new Car('BMW', 150);
console.log(mercedesCar);
console.log(bmwCar);

/*
2.1 Ստեղծել 2 նոր մեթոդներ` accelerate և brake անուններով:
2.2 accelerate մեթոդը պետք է ավելացնի մեքենայի արագությունը 10-ով և կոնսոլում ցույց տա, թե ինչ արագությամբ է գնում մեքենան:
    Օրինակ` Mercedes-Benz is going at 130km/h
2.3 brake մեթոդը պետք է նվազեցնի մեքենայի արագությունը 5-ով և կոնսոլում ցույց տա, թե ինչ արագությամբ է գնում մեքենան:
    Օրինակ` Mercedes-Benz is going at 125km/h
2.4 Կանչել մեթոդները, արդյունքները ցույց տալ կոնսոլում:
*/

Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.model} is going at ${this.speed}km/h`);
}
Car.prototype.brake = function (num) {
    this.speed -= num;
    console.log(this.model + ' is going at ' + this.speed + 'km/h');
}

mercedesCar.accelerate();
mercedesCar.brake(5);
bmwCar.accelerate();
bmwCar.brake(5);

/*
3.1 Ստեղծել նոր ֆունկցիա(constructor) ElectricCar անունով:
3.2 ElectricCar ֆունկցիա(constructor)-ը պետք է ժառանգի Car ֆունկցիա(constructor)-ի հատկություններն ու մեթոդները և պետք է ունենա իր charge անունով հատկությունը, որը ցույց է տալիս թե մեքենան ինչքան է լիցքավորված:
3.3 Ստեղծել chargeBattery անունով մեթոդ, որը պետք է լիցքավորի մեքենան:
3.4 Լրիվ լիցքավորելու դեպքում կոնսոլում պետք է ցույց տա հետևյալ ինֆորմացիան:
    '100%. Battery charged successfully!'
*/

function ElectricCar(model, speed, charge){
    Car.call(this, model, speed);
    this.charge = charge;
}

ElectricCar.prototype = Object.create(Car.prototype);
ElectricCar.prototype.chargeBattery = function (){
    let difCharge = 100 - this.charge;
    while (difCharge){
        difCharge -= 1;
        this.charge += 1;
        console.log(this.charge + '%');
    }

    console.log('100%. Battery charged successfully!');

}

const teslaCar = new ElectricCar('Tesla Model 3', 120, 75);
console.log(teslaCar);
teslaCar.chargeBattery();
