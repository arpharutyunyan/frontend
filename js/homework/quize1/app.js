var firstNum = 1;
var secondNum = 2;
console.log(firstNum, secondNum);
var temp = firstNum;
firstNum = secondNum;
secondNum = temp;
console.log(firstNum, secondNum);

// second method
var firstNum = 1;
var secondNum = 2;
console.log(firstNum, secondNum);
firstNum += secondNum;
secondNum = firstNum - secondNum;
firstNum = firstNum - secondNum;
console.log(firstNum, secondNum);


for(var i = 5; i>0; i--){
    var str = '';

    for(var j = 0; j <= 5; j++){
        if(j < i){
            str += ' ';
        }else{
            str += '*';
        }
    }
    console.log(str);
}

function sum(num){
    if(num === 0){
        return num;
    }

    return num + sum(num - 1);
}

var result = sum(5);
console.log(result);