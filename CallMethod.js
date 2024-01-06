//Call() Method takes argument separately
/* It is used to invoke a method with an owner object as an argument.*/

const person={
    fullName:function(city,state){
        console.log(this.firstname+" "+ this.lastname+" "+city+" "+state);
    }
}
const person1={
    firstname:"Nikesh",
    lastname:"sharma"
}
const person2={
    firstname:"Ankita",
    lastname:"sharma"
}
person.fullName.call(person1,"Sikar","Rajasthan");
person.fullName.call(person2,"Jaipur","Rajasthan");