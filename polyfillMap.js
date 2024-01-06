//Normal map()
const arr=[1,2,3,4];
//const res=arr.map((el)=>el*2);
//console.log(res);

//polyfill 
Array.prototype.myMap=function(cb){
    let res=[];
    for(let i=0;i<this.length;i++){
        res.push(cb(this[i]));
    }
    return res;
};
const newArr=arr.myMap((el)=>el*2);
console.log(newArr);