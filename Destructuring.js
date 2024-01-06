//Destructuring->Object

const Employee={
    id:1,
    name:"Nikesh",
    age:22,
    department:"Engineer",
    address:{
        city:"Bangalore",
        state:"KA"
    }
};
const {name,age,address:{city}}=Employee;
console.log(name,age,city);
//const {name:Fullname="Sharma"}=Employee;
//console.log(Fullname,age);


//Destructuring->Array

const fruits=["Apple","Mango","Banana","PineApple"];
const [fruit1,,fruit2]=fruits;//skip value
console.log(fruit1,fruit2);

//Destructuring->Array and Object

const groceryObject=[
    {item:"Apples",price:255,category:"Fruit"},
    {item:"Tomatos",price:30,category:"Vegi"},
    {item:"Book",price:50,category:"Stationary"}
];
const [item1,,item2]=groceryObject;
console.log(item1,item2);

