// ---------- 1 ----------
let array = [10, 'hello', {test: 20}, [2, 'l', 3]];

function copyArray(arr){
    let new_array_slice = arr.slice();
    let new_array_loop =[];

    for (let i of arr){
        new_array_loop.push(i);
    }

    return {'new_array_slice': new_array_slice, 'new_array_loop': new_array_loop};
}

let new_array_result = copyArray(array);
let new_array_slice = new_array_result.new_array_slice;
new_array_slice[0] = 'new item';
let new_array_loop = new_array_result.new_array_loop;
new_array_loop.push(0);

console.log(array);
console.log(new_array_slice, new_array_loop);

// ---------- 2 ----------
let number_array = [0, 2, 5, 4, 6, 8];

function getNumberStringWithDashes(arr){
    let result = '';

    for(let i=0; i<arr.length; i++){
        result += arr[i];

        if(i!==arr.length-1 && arr[i] % 2 === 0 && arr[i+1] % 2 === 0 ){  //if last element no need to check, because don't have next element
            result += '-';
        }
    }

    return result;
}

let result = getNumberStringWithDashes(number_array);
console.log(result);

// ---------- 3 ----------
// function customConcat(first_arr, second_arr){
//     let new_array = first_arr.slice();
//
//     for(let i of second_arr){
//         new_array.push(i);
//     }
//
//     return new_array;
// }
function customConcat(first_arr, second_arr){

    let new_array = [];

    for(let i of first_arr){
        new_array.push(i);
    }

    for(let i of second_arr){
        new_array.push(i);
    }

    return new_array;
}

let first_array = [1, 2, 3];
let second_array = [4, 5, 6];
let result_customConcat = customConcat(first_array, second_array);
console.log(result_customConcat);

// ---------- 3 ----------
// function contains(arr, element){
//     return arr.includes(element);
// }

function contains(arr, element){
   for(let i of arr){
       if(i === element){
           return true;
       }
   }

   return false;
}

let contains_array = [5, "test", 19, false, "Mike"];
console.log(contains(contains_array, 19));
console.log(contains(contains_array, 'Hello'));