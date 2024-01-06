//Normal Filter
const arr=[1,2,3,4,5];
//const newArr=arr.filter((el)=>el>2);
//console.log(newArr);

//polyfill
Array.prototype.myFilter=function(cb){
    let res=[];
    for(let i=0;i<this.length;i++){
        if(cb(this[i])){
            res.push(this[i]);
        }
    }
    return res;
}
const newArray=arr.myFilter((el)=>el>2);
console.log(newArray);