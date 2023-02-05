let array = [12, 23, 34, 45, 56, 100, 89, 88, 67, 78, 89, 90];

function moreThan80(numbers){
    const moreThan80Numbers = [];
    for(let i = 0; i < array.length; i++){
        const number = numbers[i];
        if(number >= 80){
            moreThan80Numbers.push(number);
        }
    }
    return moreThan80Numbers;
}

const result = moreThan80(array);
console.log(result);