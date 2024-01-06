document.querySelector("#grandparent")
.addEventListener("click",()=>{
    console.log("GrandParent clicked!");
},true);
document.querySelector("#parent")
.addEventListener("click",(e)=>{
    console.log("Parent clicked!");
},true);
document.querySelector("#child")
.addEventListener("click",(e)=>{
    console.log("Child clicked!");
    e.stopPropagation();
},true);