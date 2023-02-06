const array = [11, 2, 44, 7, 6, 25, 19, 47, 10];

function getsecondLargestNumber(array){
    let largestNumber = array[0];
    let secondLargestNumber = array[0];

    for(let i = 0; i < array.length; i++){
        let number = array[i];
        if(number > largestNumber){
            secondLargestNumber = largestNumber;
            largestNumber = number;
        }
        else if(number > secondLargestNumber){
            secondLargestNumber = number;
        }
    }
    return secondLargestNumber;
}

const result = getsecondLargestNumber(array);
console.log(result);