//Normal Reduce
const arr=[1,2,3,4,5];
/*let res=arr.reduce((acc,currItem)=>{
    return acc+currItem;
},0);
console.log(res);*/

//polyfill
Array.prototype.myReduce=function(cb,initialvalue){
    let acc=initialvalue;
    for(let i=0;i<this.length;i++){
        acc=acc?cb(acc,this[i]):this[i];
    }
    return acc;
};
let res=arr.myReduce((acc,currItem)=>{
    return acc+currItem;
},0);
console.log(res);