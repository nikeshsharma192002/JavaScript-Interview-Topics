const p=new Promise((resolve,reject)=>{
    resolve("Promise is Solved!!");
})
async function handlePromise(){
    const val=await p;
    console.log(val);
}
handlePromise();

//Another method
const promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Nikesh")
    },3000)
});

async function handleP(){
    console.log("Namaste");
    const a=await promise;
    console.log("Namaste");//JS engine wait for 3000 time
    console.log(a);
}
handleP();