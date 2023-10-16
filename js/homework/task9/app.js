// ------- 1 ---------
function runningSum(arr){
    const newArr = [arr[0]];

    for(let i= 1; i < arr.length; i++){
        newArr.push(arr[i] + newArr.at(-1));
    }
    return newArr;
}

let runningSumResult = runningSum( [1, 2, 3, 4]);
console.log(runningSumResult);

// ------- 2 ---------
function maximumWealth(accounts){
    let maxWealth = null;

    accounts.forEach(function (item) {
        let wealth = item.reduce(function (prev, current){
            return prev + current;
        }, 0);
        if (wealth > maxWealth){
            maxWealth = wealth;
        }
    })

    return maxWealth;
}

const accounts = [
    [1,2,3],
    [3,2,1]
];

let maximumWealthResult = maximumWealth(accounts);
console.log(maximumWealthResult);

// ------- 3 ---------
function searchMatrix(matrix, target){
    for(let i of matrix){
        if(i.includes(target)){
            return true;
        }
    }
    return false;
}

const matrix = [
    [1,3,5,7],
    [10,11,16,20],
    [23,30,34,60]
];

let searchMatrixResult = searchMatrix(matrix, 11);
console.log(searchMatrixResult);

// ------- 4 ---------
// function removeElement(){
//
// }