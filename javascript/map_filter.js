const nums =[20,40,60,80];
const sqr=nums.map(( a)=> { return a**2});
console.log(sqr);
const prices = [899.90,654.93,65.85,37.56];
const n=prices.map((a)=>{return parseInt(a)});
console.log(n);
const dis_price=prices.map((a) =>{return 0.9*a});
console.log(dis_price);
const less=prices.filter((j) => {return j<100});
console.log(less)
const friends =['raju','pinki','kalia','chotu','om']
const len=friends.filter((p)=>{return (p.length >=5)});
console.log(len);
const names =['raju rastogi','farhan quereshi','leon scott kennedy'];
const na=names.map((x)=>{return x.split(' ')[0]});
console.log(na);