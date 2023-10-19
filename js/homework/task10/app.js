function contains(arr, element){
    let leftArrow = 0;
    let rightArrow = arr.length - 1;

    while (leftArrow <= rightArrow){
        let middleIndex = Math.round((rightArrow + leftArrow) / 2 );
        let middleElement = arr[middleIndex];

        if(element === middleElement){
            return middleIndex;
        }else if (element < middleElement){
            rightArrow = middleIndex - 1;
        }else{
            leftArrow = middleIndex + 1;
        }
    }

    return -1;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(contains(arr, 1));
console.log(contains(arr, 3));
console.log(contains(arr, 9));
console.log(contains(arr, 15));