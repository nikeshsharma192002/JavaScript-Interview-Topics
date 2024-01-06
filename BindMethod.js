//Bind() method 
/*Bind is a function that helps you create another function that you can execute later with the new context of this that is provided.*/



const person={
    firstname:"Nikesh",
    lastname:"sharma",
    fullName:function(){
        console.log(this.firstname+" "+this.lastname);
    }
}
const person1={
    firstname:"Ankita",
    lastname:"Sharma"
}
let fullName=person.fullName.bind(person1);
fullName();
setTimeout(()=>{
    person.fullName();
},2000);