/*Promise-It is a special javascript object.It produces a value after an asynchronous operation completes successfully,
or an error if it does not complete successfully due to setTimeout,network,and so onabort.*/

let promise=new Promise(function(resolve,reject){
    resolve("worked");
    reject("something went wrong");
})
promise.then(result=>console.log(result));

//Combining promise
const promise1=new Promise(function(resolve,reject){
    setTimeout(resolve,1500,"Hello P1");
})
const promise2=new Promise(function(resolve,reject){
    setTimeout(resolve,1000,"Hello P2");
})
const promise3=new Promise(function(resolve,reject){
    setTimeout(resolve,5000,"Hello P3");
})
//Promise.all()
Promise.all([promise1,promise2,promise3]).then(values=>console.log(values));

//Promise.any()
Promise.any([promise1,promise2,promise3]).then(values =>console.log(values));

//Promise.allSettled()
/*The Promise.allSettled method is used to handle multiple promises concurrently, 
just like Promise.all, but it waits for all the promises to settle (either resolve or reject) before proceeding. 
It returns an array of objects representing the outcomes of the input promises, including their values or reasons for rejection.*/
Promise.allSettled([promise1, promise2, promise3]).then(result => {
    console.log(result);
}).catch(error => {
    console.log('There is an Error!');
});

//Promise.race()
//As the name suggests, race returns first promise with shortest delay whether it is resolved or rejected.
Promise.race([promise1, promise2, promise3]).then(result => {
    console.log(result);
}).catch(error => {
    console.log('There is an Error!');
});