let odd = [];
let i = 7;
while(i <= 19){
    const number = i;
    if(number % 2 !== 0){
        odd.push(number);
    }
    i++;
}

console.log(odd);