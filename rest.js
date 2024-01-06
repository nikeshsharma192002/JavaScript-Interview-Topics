// With the help of a rest parameter, a function can be called with any number of arguments, no matter how it was defined.

//Rest->array

function addNumber(a,b,c,...other){
    console.log(other);
    return a+b+c;
}
const res=addNumber(1,2,3,4,5);
console.log(res);

//Rest->Object
var student={
    name:"Nikesh",
    age:22,
    hobbies:["cricket","games"]
}
const {age,...rest}=student;
console.log(age,rest);