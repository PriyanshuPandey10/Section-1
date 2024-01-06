const user ={
    name:'Raju',
    email:'raju@gmail.com',
    city:'Janakpur'
};
console.log(user);
console.log(user.name);
console.log(user['email']);
user.city ='Kanpur';
user.password ='bdue34r';
console.log(user);


const smartphone ={
    brand:'Samsung',
    model:'Galaxy S22 Ultra',
    storage:[256,512],
    price:82000,
    colors:['white','black','grey']
}
console.log(smartphone);
console.log(smartphone.model);
console.log(smartphone.model);
console.log(smartphone.storage[1]);
smartphone.colors[2]='red'
console.log(smartphone);
smartphone.colors.push('blue');
console.log(smartphone);
console.log("-----------------------");
const smartphonelist=[
    {
    brand:'Samsung',
    model:'Galaxy S22 Ultra',
    storage:[256,512],
    price:82000,
    colors:["white","black","grey"]
    },
    {
        brand:'Apple',
        model:'iphone 15 pro max',
        storage:[128,256],
        price:92000,
        colors:["white","black",]
    },
    {
        brand:'OnePlus',
        model:'12 R',
        storage:[256,512],
        price:79000,
        colors:["red","blue","white"]
    },
    {
        brand:'Nothing',
        model:'2',
        storage:[256,512],
        price:52000,
        colors:["black","white"]
    },
    {
        brand:'Samsung',
        model:'M21',
        storage:[64,128],
        price:28000,
        colors:["green","blue"]
    },
];
console.log(smartphonelist[0].brand);
console.log(smartphonelist[0].colors[1]);
smartphonelist[0].colors[0]="Yellow";
console.log(smartphonelist[0].colors);
smartphonelist[4].colors[1]="red";
console.log(smartphonelist)
const a=smartphonelist.filter((i)=>{return i.price>60000});
console.log(a);
const b=smartphonelist.filter((i)=>{return i.brand.toLowerCase==="Samsung".toLowerCase});
console.log(b);
const c=smartphonelist.filter((i)=>{return i.colors.includes("white")});
console.log(c);
const d=smartphonelist.map((i)=>{return i.brand});
console.log(d);
const e=smartphonelist.map((i)=>{return i.price});
console.log(e);
const f=smartphonelist.map((i)=>{return i.brand+" "+i.model});
console.log(f);