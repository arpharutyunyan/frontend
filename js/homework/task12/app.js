/*
1.1 Ստեղծել ֆունկցիա isBlank անունով, որը որպես արգումենտ ստանում է տող(string):
1.2 Ֆունկցիան պետք է ստուգի տողը դատարկ է, թե ոչ:
    1.3 Եթե դատարկ է պետք է հետ վերադարձնի true, հակառակ դեպքում false;
1.4 Ստուգել նաև փոխանցված արգումենտի տող լինելը:
*/
function isBlank(str){
    if(str === String(str)){ // (typeof str) == 'string'
        return !str.length;
    }

    return 'Not string';
}

console.log(isBlank(123));
console.log(isBlank('123'));
console.log(isBlank(''));

/*
2.1 Ստեղծել ֆունկցիա repeat անունով, որը որպես արգումենտ ստանում է տող(string) և թիվ(number):
2.2 Ֆունկցիան պետք է իրար միացնի փոխանցված տեքստը, փոխանցված թվին համապատասխան և վերադարձնի նոր տող:
    repeat("Hi"); //Hi
repeat("Hi", 1); //Hi
repeat("Hi", 3); //Hi Hi Hi
*/

function repeat(str, multiplyCount){
    let newStr = str;
    for(let i=0; i<multiplyCount-1; i++){
        newStr = newStr.concat(' ', str);
    }

    return newStr;
}

console.log(repeat("Hi", 3));
console.log(repeat("Hi", 1));
console.log(repeat("Hi"));

/*
3.1 Ստեղծել ֆունկցիա compare անունով, որը ստանում է 2 արգումենտ` տող(string):
3.2 Ֆունկցիան պետք է համեմատի այդ 2 տողերը իրար հավասար են, թե ոչ:
3.3 Եթե նույն են պետք է հետ վերադարձնի true, հակառակ դեպքում false;
3.4 Մեծատառ, փոքրատառ անտեսել:
compare("Hello", "heLLo"); true
compare("Hi", ""Hello); false
*/
function compare(firstOperand, secondOperand){
    if(firstOperand.length !== secondOperand.length){
        return false;
    }else {
        for(let i=0; i<firstOperand.length; i++){
            if(firstOperand[i].toLowerCase() !== secondOperand[i].toLowerCase()){
                return false;
            }
        }
    }

    return true;
}

console.log(compare("Hello", "heLLo"));
console.log(compare("Hello", "hekLo"));
console.log(compare("Hi", "Hello"));

/*
4.1 Ստեղծել ֆունկցիա getAlphabet անունով, որը հետ է վերադարձնում զանգված, հայերեն այբուբենի տառերով:
    getAlphabet() //["ա", "բ", "գ".....]
*/
function getAlphabet(){
    let hexNumber = parseInt('0560', 16);
    const arr = [];

    for(let i=0; i<39; i++){
        hexNumber += 1;
        if(i === 33){ // checking ու
            arr.push(String.fromCharCode(hexNumber - 10) + String.fromCharCode(hexNumber));
        }else{
            arr.push(String.fromCharCode(hexNumber));
        }
    }

    arr.splice( arr.length - 3, 0, arr.pop());

    return arr;

}

let result = getAlphabet();
console.log(result);
