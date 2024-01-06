/*Throttling is a technique that limits how often a function can be called in a given period of time. 
It is useful for improving the performance and responsiveness of web pages that have event listeners 
that trigger heavy or expensive operations, such as animations, scrolling, resizing, fetching data, etc.*/

const loggerFunc = () => {
    console.count("Throttled Function");
  }
  
  const throttle = (fn, limit) => {
    let flag = true;
    return function(){
      let context = this;
      let args = arguments;
      if(flag){
        fn.apply(context, args);
        flag = false;
        setTimeout(() => {
          flag=true;
        }, limit);
      }
    }
  }
  
  const betterLoggerFunction = throttle(loggerFunc, 1000);
  
  window.addEventListener("resize",betterLoggerFunction);
  
  // This is the normal Function without Throttling
  //Check the console for the difference between the calls of Normal Function and the Throttled Function 
  const normalFunc = () => {
    console.count("Normal Function");
  }
  
  window.addEventListener("resize",normalFunc);
  
  