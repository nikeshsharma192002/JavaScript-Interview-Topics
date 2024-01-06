//The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.

//spread->array

var names=["Nikesh","Sharma","Engineer"];
function getName(name1,name2,name3){
    console.log(name1,name2,name3);
}
getName(...names);

//spread->Object

var Student={
    name:"Nikesh",
    age:22
}
var newStudent={
    ...Student,
    age:23
}
console.log(newStudent);

//example
var array=[1,2,3];
var obj={...array};
console.log(obj);

//example
const object={...true,..."test",...10};
console.log(object);