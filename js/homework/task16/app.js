/*
1.1 Ստեղծել ֆունկցիա removeDuplicates անունով, որը որպես արգումենտ ստանում է զանգված:
1.2 Ֆունկցիան պետք է ստուգի եթե զանգվածում կան կրկնվող էլեմենտներ` հետ վերադարձնի նոր զանգված առանց կրկնվող էլեմենտների:
removeDuplicates([1, 2, 5, 10, 2, 10, 7]) //[1, 2, 5, 10, 7]
*/
function removeDuplicates(arr){
    // const new_arr = [];
    // arr.forEach(item => {
    //     if(!new_arr.includes(item)){
    //         new_arr.push(item);
    //     }
    // })
    //
    // return new_arr;

    return arr.filter((item, index) => { // if find another number which index is not given index, mean that there is repeated number
         return arr.indexOf(item) === index;
    });
}

console.log(removeDuplicates([1, 2, 5, 10, 2, 10, 7]));

/*
2.1 Ստեղծել ֆունկցիա isPalindrome անունով, որը որպես արգումենտ ստանում է տող` string:
2.2 Ֆունկցիան պետք է ստուգի փոխանցված տողը պալինդրոմ(հետուառաջ կարդացվող բառ կամ բառակապակցություն) է, թե ոչ և հետ վերադարձնի համապատասխանաբար true կամ false:
isPalindrome("repaper") true
isPalindrome("level") true
isPalindrome("hello") false
*/

function isPalindrome(str){

    // for(let i=0; i<=Math.floor(str.length/2); i++){
    //     if(str[i] !== str.charAt(str.length - 1 - i)){
    //         return false;
    //     }
    // }
    //
    // return true;

    return str === str.split('').reverse().join('');
}

console.log(isPalindrome("repaper"));
console.log(isPalindrome("level"));
console.log(isPalindrome("hello"));

/*
3.1 Ստեղծել ֆունկցիա covertToUpperCase անունով, որը որպես արգումենտ ստանում է տող` string:
3.2 Ֆունկցիան պետք է տողի բառերի բոլոր առաջին տառերը դարձնի մեծատառ, մնացածը փոքրատառ:
covertToUpperCase("the quick brown fox") //"The Quick Brown Fox"
*/
function covertToUpperCase(str){
    str = str.toLowerCase();
    let wordArr = str.split(' ');
    wordArr = wordArr.map(item => {
        return item.replace(item[0], item[0].toUpperCase());
    })

    return wordArr.join(' ');
}

console.log(covertToUpperCase("the quick brown fox"));

/*
4.1 Ստեղծել ֆունկցիա isUpperCase անունով, որը որպես արգումենտ ստանում է տող` string:
4.2 Ֆունկցիան պետք է ստուգի փոխանցված տողը սկսվում է մեծատառով, թե ոչ և հետ վերադարձնի համապատասխանաբար true կամ false:
isUpperCase("Hello") //true
isUpperCase("heLlo"); //false
*/
function isUpperCase(str){
    return str[0] === str[0].toUpperCase();
}

console.log(isUpperCase("Hello"));
console.log(isUpperCase("heLlo"));

/*
5.1 Ստեղծել ֆունկցիա findLongestWord անունով, որը որպես արգումենտ ստանում է տող` string:
5.2 Ֆունկցիան պետք է հետ վերադարձնի տողի ամենաերկար բառը:
findLongestWord("JavaScript is the Best Programming Language") //Programming
*/
function findLongestWord(str){
    const wordArr = str.split(' ');
    // let maxLength = 0;
    // let maxLengthWord = '';
    //
    // wordArr.forEach(item => {
    //     if(item.length > maxLength){
    //         maxLength = item.length;
    //         maxLengthWord = item;
    //     }
    // })
    //
    // return maxLengthWord;

    const lengthArr = wordArr.map(item => {
        return item.length;
    });

    const maxIndex= lengthArr.indexOf(Math.max(...lengthArr));

    return wordArr[maxIndex];
}

console.log(findLongestWord("JavaScript is the Best Programming Language"));