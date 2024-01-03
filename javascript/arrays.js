const myarray =[345,'abc',45.24,true];
console.log(myarray);
const fruits = ['Apple','Banana','Grapes','Mango','Lichi'];
console.log(fruits.length);//Works with string
//indexing
console.log(fruits[2]);//Works with string
console.log(fruits.indexOf('Banana'));//Works with string
console.log(fruits.at(-2));//Works with string
console.log('abrakadabra'.length);
//slicing
console.log(fruits.slice(1,4));
console.log(fruits.slice(-4,-2));
console.log(fruits.slice(1,));
//addding elements
console.log(fruits);
fruits.push('Orange');//adds element at the end
fruits.unshift('Kiwi')//adds element in Starting
console.log(fruits);
//Removing elements 
fruits.pop();//Removes element from end
fruits.shift();//Removes element from starting
console.log(fruits);
// fruits.splice(2,2) //This will remove element
// fruits.splice(2,2,'guava','Watermelon');//This will replace element
// fruits.splice(2,0,'guava','Watermelon');
console.log(fruits);