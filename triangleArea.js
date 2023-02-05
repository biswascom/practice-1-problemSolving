function triangleArea(armOne, armTwo, armThree){
    const halfRange = (armOne + armTwo + armThree) / 2;
    const area = (Math.sqrt(halfRange * ((halfRange - armOne) * (halfRange - armTwo) * (halfRange - armThree)))).toFixed(2);
    return parseFloat(area);
}

const result = triangleArea(10, 11, 10);
console.log(result);
console.log(typeof result);