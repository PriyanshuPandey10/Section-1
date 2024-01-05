const nums = [10,20,30,40,50,60,70];
for(let i=0;i<nums.length;i++){
    console.log(nums[i]);
}
console.log("---------------");
for(let n of nums){
    console.log(n);
}
console.log("---------------");
nums.forEach((n,i) => {
    console.log(n,i);
});
console.log("---------------");
//q1. Find Square of all elements
const a=[]
for(let o of nums){
    // console.log(o*o);
    a.push(o*o);
}
console.log(a);
