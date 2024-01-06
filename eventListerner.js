document.getElementById("clickMe").addEventListener("click",function xyz(){
    console.log("Button Clicked");
});
function attachEventListerner(){
    let count=0;
    document.getElementById("clickMe").addEventListener("click",function xyz(){
        console.log("button clicked",++count);
    });
}
attachEventListerner();