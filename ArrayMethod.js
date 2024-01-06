//toString()
let num=[1,2,3,4];
let b=num.toString();
console.log(b);

//join()
let c=num.join("_");
console.log(c);

//pop() delete last element
let num1=[1,2,3,4];
num1.pop();
console.log(num1);

//push() add element at end
let num2=[1,2,3,4];
num2.push(5);
console.log(num2);

//shift()  remove first element
let num3=[1,2,3,4];
let d=num3.shift();
console.log(d,num3);

//unshift() add element at first
let num4=[1,2,3,4];
let e=num4.unshift(78);
console.log(e,num4);

//delete
let num5=[1,2,3,4];
let newnum5=delete num5[0];
console.log(newnum5);

//concat()
let num6=[1,2,3,4];
let num_more=[11,12,13,14];
let newArray=num6.concat(num_more);
console.log(newArray);


//sort
let n=[1,12,9,20,2,15,3,6];
n.sort();
console.log(n);

//splice
const x=[1,2,3,4,5];
x.splice(2,1,23,24);
console.log(x);

//slice
const y=[1,2,3,4];
let newNum=y.slice(2);
let newNum1=y.slice(1,3);
console.log(newNum);
console.log(newNum1);


