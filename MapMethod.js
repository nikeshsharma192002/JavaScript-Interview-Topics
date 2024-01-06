//map() creates a new array from calling a function for every array element.
//map() does not execute the function for empty elements.
//map() does not change the original array.

const numbers=[1,2,3,4];
const doubles=numbers.map(item=>item*2);
console.log(doubles);