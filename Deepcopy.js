//Normal Deepcopy

/*let arr=[1,2,3,4];
let brr=arr;
//let brr=[...arr];//shallow copy
brr.push(8);
console.log(arr);
console.log(brr);

let arr1=[1,2,[3,4]];
let brr1=[...arr1];//brr1=arr1
brr1[2].push(9);//brr1.push(9)
console.log(arr1);
console.log(brr1);

let brr2=JSON.parse(JSON.stringify(arr1));
console.log(arr1);
console.log(brr2);*/

//polyFill
let Arr=[1,2[3,4]];
let Brr=Arr;
Brr[2].push(5);

if(["string","number","boolean"].includes(typeof val)){
    return val;
}

function deepCopy(val){
    if(Array.isArray(val)){
        return val.map(el=>deepCopy(el));
    }
}
Brr=deepCopy(Arr);
Brr[2].push(5);
console.log(Arr);
console.log(Brr);

