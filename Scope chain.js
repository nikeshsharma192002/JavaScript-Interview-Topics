/*Scope chains establish the scope for a given function. 
Each function defined has its own nested scope, and any function defined within 
another function has a local scope which is linked to the outer function — 
this link is called the chain.*/

var name="Nikesh";
function getName(){
    console.log(name);
    var age=23;
    function getAge(){
        console.log(age);
    } 
    getAge();
}
getName();