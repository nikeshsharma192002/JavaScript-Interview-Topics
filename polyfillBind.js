//Normal Bind
let person1={
    name:"Nikesh"
}
let person2={
    name:"Sharma"
}
function printAge(age){
    console.log(`${this.name} is ${age}`);
}
let newFun=printAge.bind(person1);
newFun(30);

//Polyfill 
Function.prototype.myBind=function(obj={},...args1){
    if(typeof this !=="function"){
        throw new Error("not callable");
    }
    obj.fn=this;
    return function(...args2){
        obj.fn(...args1,args2);
    }
    
};
let newFun1=printAge.myBind(person2);
newFun1(25);
