// const nums =[20,40,60,80];
// const sqr=nums.map(( a)=> { return a**2});
// console.log(sqr);
// const prices = [899.90,654.93,65.85,37.56];
// const n=prices.map((a)=>{return parseInt(a)});
// console.log(n);
// const dis_price=prices.map((a) =>{return 0.9*a});
// console.log(dis_price);
// const less=prices.filter((j) => {return j<100});
// console.log(less)
// const friends =['raju','pinki','kalia','chotu','om']
// const len=friends.filter((p)=>{return (p.length >=5)});
// console.log(len);
// const names =['raju rastogi','farhan quereshi','leon scott kennedy'];
// const na=names.map((x)=>{return x.split(' ')[0]});
// console.log(na);
console.log("------PRACTICE QUESTIONS--------");
//filter all even numbers from an array of numbers
const arr=[34,17,98,53,57,88,26,30];
const even=arr.filter((a)=>{return a%2===0});
console.log(even);

//convert all prices to integer numbers [ '₹234.20', '₹999.990', '₹993.20', '₹99.50', '₹8766.827', '₹736.99']
const a=[ '₹234.20', '₹999.990', '₹993.20', '₹99.50', '₹8766.827', '₹736.99']
const b=a.map((c)=>{return (c.split('₹')[1])});
const d=b.map((e)=>{return (e.split('.')[0])});
console.log(d);

//filter all ids containing 'a' ['6fd6a987', '76btdb56', 'ka98so', '63va9o', '68sjh77h']
const g= ['6fd6a987', '76btdb56', 'ka98so', '63va9o', '68sjh77h']
const h=g.filter((i)=>{return i.includes('a')});
console.log(h);
