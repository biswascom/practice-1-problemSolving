function factorial(numbers){
    let factor = 1;
    for(let i = 1; i <= 9; i++){
        const number = i;
        factor = factor * number; 
    }
    return factor;
}

const result = factorial(9);
console.log(result);