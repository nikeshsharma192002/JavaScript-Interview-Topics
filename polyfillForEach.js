//Normal forEach

const arr=[1,2,3,4];
//arr.forEach((el)=>console.log(el));

//polyfill forEach
function print(el){
    console.log(el);
}
Array.prototype.myForEach=function(cb){
    for(let i=0;i<this.length;i++){
        cb(this[i]);
    }
};
arr.myForEach(print);