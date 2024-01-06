let object1={
    name:"Nikesh",
    age:22,
    getIntro:function(){
        console.log(this.name+" is "+this.age+" year old!.");
    }
}
let object2={
    name:"Ankita"
}
object2.__proto__=object1;
console.log(object2.getIntro());