//The filter() method creates a new array filled with elements that pass a test provided by a function.

//The filter() method does not execute the function for empty elements.

//The filter() method does not change the original array.

const numbers=[1,2,3,4,5,6];
const even=numbers.filter(item=>item%2==0);
console.log(even);

//Second Example

const students=[
    {name:"Nikesh",grade:87},
    {name:"Ankita",grade:90},
    {name:"Deepak",grade:89}
];
const studentgrade=students.filter(student=>student.grade>=89);
console.log(studentgrade);