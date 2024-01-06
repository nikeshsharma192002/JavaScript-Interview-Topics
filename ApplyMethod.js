//Apply() method takes argument as a array.

const person={
    fullName:function(city,state){
        console.log(this.firstname+" "+this.lastname+" "+city+" "+state);
    }
}
const person1={
    firstname:"Nikesh",
    lastname:"Sharma"
}
person.fullName.apply(person1,["Sikar","Rajasthan"]);