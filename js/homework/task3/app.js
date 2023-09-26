// 1.1 Գրել ցիկլ որը կոնսոլում տպում է 17-ից 42 թվերը (42-ը ներառյալ):

var num = 17;
while(num <= 42){
    console.log(num);
    num++;
}

// 1.2 Գրել ծրագիր, որը հաշվում է 2 թվի 12 աստիճանը:

var start = 2;
var result = 2; // 2*1 what's why start from 2 and skip one iteration
while(start <= 12){
    result *= 2
    start++;
}
console.log(result);

// or

var start = 1;
var result = 1; // only for initialize, give 1 because multiply value not changed during first iteration (1*2)
while(start <= 12){
    result *= 2
    start++;
}
console.log(result);

// 1.3 Պատկերել կոնսոլում աստղանիշներներով ուղղանկյուն եռանկյուն:

var i = 0;
while(i < 5){
    var j = 0;
    let star = '';
    while(j < i+1){ // or j <= i
        star += '*';
        j++;
    }
    console.log(star);
    i++;
}

// 2.1 Գրել ցիկլ որը կոնսոլում տպում է 0-ից 100 թվերի գումարը:

var sum = 0;
for(var i=0; i<100; i++){
    sum += i;
}
console.log(sum);

// 2.2 Գրել ցիկլ որը կոնսոլում տպում է 0-ից 100 թվերը, որոնք զույգ են:

for(var i=0; i<100; i++){
    if(!(i%2)){ // i % 2 = 0, !0 == true
        console.log(i + ' is even');
    }
}

// 2.3 Գրել ցիկլ որը կոնսոլում տպում է 25-ից 80 թվերը, որոնք կենտ են:

for(var i=25; i<80; i++){
    if(i%2){
        console.log(i + ' is odd');
    }
}

// 2.4 Գրել ցիկլ որը կոնսոլում տպում է 0-ից 100 միջակայքում ընկած պարզ թվերը:

for(var i=2; i<100; i++){
    var isPrime = true;
    for(var j=2; j<i; j++){ // or j<=Math.sqrt(i)
        if(!(i%j)){
            isPrime = false;
            break;
        }
    }
    if(isPrime){
        console.log(i + ' is prime number');
    }
}

// 3. Ցիկլի միջոցով ստանալ Ֆիբոնաչիի շարքի առաջին 10 թվերը(0, 1, 1, 2, 3, 5, 8, 13, 21, 34.):

var prePrevious = 0;
var previous = 1;
var result = `( ${prePrevious}, ${previous}, `;
for(var i = 0; i<8; i++){ // first two items already exist

    var currentNum = previous + prePrevious;

    prePrevious = previous;
    previous = currentNum;
    result += currentNum;

    if (i === 7) { // check last element
        result += '.)';
    } else {
        result += ', ';
    }
}
console.log(result);