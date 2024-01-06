/*Debounce is a powerful technique used to optimize event handling by delaying the
execution of a function until after a specified period of inactivity.*/

let counter=0;
const getData=()=>{
    console.log("Feteching data..",counter++);
}
const debounce=function(fn,d){
    let timer;
    return function(){
        let context=this,
        args=arguments;
        clearTimeout(timer);
        timer=setTimeout(()=>{
            fn.apply(context,args);
        },d);
    }
}
const betterFunction=debounce(getData,300);