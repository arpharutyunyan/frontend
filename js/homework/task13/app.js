/*
Գտնել շրջանագծի երկարությունը, եթե հայտնի է շրջանագծի շառավիղը՝ r = 13.5:
Բանաձևը - I = 2πr, որտեղ
I - շրջանագծի երկարություն
r - շառավիղ
*/
function perimeterCircle(r){
    return 2 * Math.PI * r;
}

console.log(perimeterCircle(13.5));

/*
Գտնել շրջանագծի մակերեսը, եթե հայտնի է շրջանագծի շառավիղի երկարությունը՝ r = 9:
Բանաձևը - S=πr², որտեղ
S - շրջանագծի մակերես
r - շառավիղ
*/
function areaCircle(r){
    return Math.PI * r ** 2;
    // return Math.PI * Math.pow(r, 2);
}

console.log(areaCircle(9));

/*
Տրված է հետևյալ կոդը`
const arr =[ 6, 24 ];
const emptyArr =[  ];
arr[56] = 4;
arr զանգվածի արժեքների քառակուսիները, գրել emptyArr զանգվածում:
*/

const arr =[ 6, 24 ];
const emptyArr =[  ];
arr[56] = 4;
if (Array.isArray(arr)){
    arr.forEach((element) => {
        if (element){
            emptyArr.push(Math.pow(element, 2));
        }
    });
}

console.log(arr);
console.log(emptyArr);

/*
Գրել random անունով Ֆունկցիա, որը ստանում է 2 արգումենտ` թվեր և ամեն անգամ կանչելուց այդ թվերի միջակայքից պատահականության սկզբունքով ընտրում որևէ ամբողջ թիվ և հետ վերադարձնում:
random(-1, 20); //17
random(-1, 20); //12
random(-1, 20); //3
*/

function random(min, max){
    let randomNum = Math.random() * (max - min + 1) + min;
    return Math.floor(randomNum);
}

console.log(random(-2, 2));
for(let i=0; i<100; i++){
    console.log(random(-1, 20));
}

/*
Գրել Ֆունկցիա getMaxValueFromArray անունով, որը որպես արգումենտ ստանում է թվերի զանգված և հետ վերադարձնում այդ զանգվածի ամենամեծ թիվը:
    getMaxValueFromArray([2, -1, 17, -9, 54, 32]); //54
*/

function getMaxValueFromArray(arr){
    // return Math.max(...arr);
    return Math.max.apply({}, arr);
}

console.log(getMaxValueFromArray([2, -1, 17, -9, 54, 32]));