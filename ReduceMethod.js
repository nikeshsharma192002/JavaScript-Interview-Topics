//The reduce() method executes a reducer function for array element.
//The reduce() method returns a single value: the function's accumulated result.
//The reduce() method does not execute the function for empty array elements.
//The reduce() method does not change the original array.

const numbers=[1,2,3,4];
const sum=numbers.reduce(function(accumlator,currentitem){
    return accumlator+currentitem;
},0);
console.log(sum);

//Second Example

var pets=["dog","cat","peacock","dog","cat","peacock","peacock"];
var petcount=pets.reduce(function(obj,pet){
    if(!obj[pet]){
        obj[pet]=1;
    }
    else{
        obj[pet]++;
    }
    return obj;
},{});

console.log(petcount);