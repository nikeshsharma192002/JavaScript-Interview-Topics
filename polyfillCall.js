//Normal Call
let person1={
    name:"Nikesh"
}
let person2={
    name:"Sharma"
}
function printAge(age){
    console.log(`${this.name} is ${age}`);
}
printAge.call(person1, 30)

//polyfill
Function.prototype.myCall=function(obj={},...args){
    if(typeof this !=="function"){
        throw new Error("not callable");
    }
    obj.fn=this;
    obj.fn(...args);
};
printAge.myCall(person2,45);