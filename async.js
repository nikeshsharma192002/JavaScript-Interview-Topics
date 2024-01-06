//async return a promise
/*An async function declaration creates an AsyncFunction object. 
Each time when an async function is called, 
it returns a new Promise which will be resolved with the value returned by the async function, 
or rejected with an exception uncaught within the async function.*/

const P=new Promise((resolve,reject)=>{
    resolve("Problem is resolved!!");
})

async function getData(){
    return P;
    
}
const data=getData();

data.then(res=>console.log(res));

