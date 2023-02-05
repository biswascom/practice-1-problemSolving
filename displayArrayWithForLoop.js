let array = [12, 23, 34, 45, 56, 67, 78, 89, 90];

function displayAnArray(numbers){
    const obtainedArray = [];
    for(i = 0; i < array.length; i++){
        const number = array[i];
        obtainedArray.push(number);
    }
    return obtainedArray;
}

let result = displayAnArray(array);
console.log(result);