let array = [12, 23, 34, 45, 56, 67, 78, 89, 90];

let position = array[3];
console.log(position);

array.push(100, 200);
console.log(array);

array.pop();
console.log(array);

array.unshift(99);
console.log(array);

array.shift();
console.log(array);

let sliceArray = array.slice(1, 5);
console.log(sliceArray);
console.log(array);

let spliceArray = array.splice(0, 3);
console.log(spliceArray);
console.log(array);

let changeWithSplice = array.splice(0, 2, 75, 69);
console.log(changeWithSplice);
console.log(array);