//the this keyword refers to an object.
//Which object depends on how this is being invoked (used or called).

const obj={
    name:"Nikesh",
    sayHello: function(){
        console.log("hello",this);
        var sayBye=function(){
            console.log("Bye",this);
        }
        sayBye();
    }
}
obj.sayHello();