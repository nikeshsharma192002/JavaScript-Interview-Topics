//Normal Apply
let person1={
    name:"Nikesh"
}
let person2={
    name:"Sharma"
}
function printAge(age){
    console.log(`${this.name} is ${age}`);
}
printAge.apply(person1,[22]);

//polyfill
Function.prototype.myApply=function(obj={},...args){
    if(typeof this !=="function"){
        throw new Error("not callable");
    }
    if(!Array.isArray(...args)){
        throw new Error("TypeError");
    }
    obj.fn=this;
    obj.fn(...args);
};
printAge.myApply(person2,[23]);