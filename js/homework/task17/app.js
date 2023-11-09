/*
1.1 Ստեղծել ֆունկցիա getCurrentDay անունով:
1.2 getCurrentDay ֆունկցիան որպես արգումենտ ստանում է հետևյալ նշաններից որևէ մեկը(-, _, /):
1.3 getCurrentDay ֆունկցիան պետք է հետ վերադարձնի այդ պահի օրը, ամիսը, տարին` որպես բաժանարար նշան օգտագործելով որպես արգումենտ փոխանցված նշանը:
1.4 Այլ նշանի դեպքում ֆունկցիան պետք է հետ վերադարձնի դատարկ տող:
getCurrentDay("/"); // 05/11/2022
*/
function getCurrentDay(sign){
    const signsArr = ['-', '_', '/'];
    if(!signsArr.includes(sign)){
        return '';
    }

    const currentDate = new Date();

    let day = currentDate.getDate();
    let month = currentDate.getMonth()+1;
    let year = currentDate.getFullYear();

    day = day < 10 ? '0'+day : day;
    month = month < 10 ? '0'+month : month;

    const dateInfoArr = [day, month, year];

    return dateInfoArr.join(sign);
}

console.log(getCurrentDay('*'));
console.log(getCurrentDay('/'));

/*
2.1 Ստեղծել ֆունկցիա getDaysInMonth անունով:
2.2 getDaysInMonth ֆունկցիան ստանում է month(ամիս) և year(տարի) արգումենտներ:
2.3 getDaysInMonth ֆունկցիան պետք է հետ վերադարձնի, որպես արգումենտ փոխանցված տարվա ամսվա օրերի քանակը:
    getDaysInMonth(2, 2022); //28
    getDaysInMonth(12, 2022); //31
*/
function getDaysInMonth(month, year){
    const date = new Date(year, month, 0);

    if(isNaN(date)){
        return '';
    }

    return date.getDate();
}

console.log(getDaysInMonth(2, 2022));
console.log(getDaysInMonth(12, 2022));
console.log(getDaysInMonth('02', '2024'));
console.log(getDaysInMonth('feb', '2024'));

/*
3.1 Ստեղծել ֆունկցիա getMonthFromDate անունով:
3.2 getMonthFromDate ֆունկցիան որպես արգումենտ ստանում է date օբյեկտ:
3.3 getMonthFromDate ֆունկցիան պետք է հետ վերադարձնի փոխանցված date օբյեկտի ամիսը:
    getMonthFromDate(new Date("11/05/2022")) //November
*/
function getMonthFromDate(date){
    const monthNames = [
        "January", "February", "March",
        "April", "May", "June",
        "July", "August", "September",
        "October", "November", "December"
    ];

    const month = date.getMonth();

    return monthNames[month];
}

console.log(getMonthFromDate(new Date("11/05/2022")));
console.log(getMonthFromDate(new Date("03/05/2022")));

/*
4.1 Ստեղծել ֆունկցիա isWeekend անունով:
4.2 isWeekend ֆունկցիան որպես արգումենտ ստանում է ինչ-որ ամիս, ամսաթիվ, տողի տեսքով և հետ վերադարձնում true եթե շաբաթ կամ կիրակի օրն է, հակառակ դեպքում հետ վերադարձնում false:
isWeekend("11/05/2022") //true
isWeekend("11/07/2022") //false
*/
function isWeekend(date){
    const weekDay = new Date(date).getDay();

    return weekDay === 0 || weekDay === 6;
}

console.log(isWeekend("11/05/2022"));
console.log(isWeekend("11/07/2022"));

/*
5.1 Ստեղծել ֆունկցիա dateDifferenceInDays անունով:
5.2 dateDifferenceInDays ֆունկցիան ստանում է 2 արգումենտ` ամիս, ամսաթվեր, տողի տեսքով:
5.3 dateDifferenceInDays ֆունկցիան պետք է հաշվի այդ տարեթվերի միջև եղած օրերի քանակը և հետ վերադարձնի:
    dateDifferenceInDays("04/02/2014", "11/04/2014") //216
*/
function dateDifferenceInDays(firstDate, secondDate) {
    firstDate = new Date(firstDate);
    secondDate = new Date(secondDate);
    const difInMilliseconds = Math.abs(firstDate - secondDate); // get difference in milliseconds
    const difInDays = difInMilliseconds / (1000 * 60 * 60 * 24);

    return difInDays;
}

console.log(dateDifferenceInDays("04/02/2014", "11/04/2014"));