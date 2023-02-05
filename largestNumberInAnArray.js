const array = [23, 77, 76, 98, 34, 55, 54, 87, 00, 90, 99, 76, 67, 56, 77, 85];
function largestNumberInAnArray(numbers){
    let largest= 0;
    // let sum = 0;
    for(i = 0; i < array.length; i++){
        const number = numbers[i];
        if(number > largest){
            largest = number;
        }
        // sum = sum + number;
    }
    return largest;
}

const result = largestNumberInAnArray(array);
console.log(result);