//Prime number
const prime=(num) => {
    let c=0;
    for(let i=2;i<num;i++){
        if(num%i==0)
        c++;
    }
    if(c===0){
        console.log("Number is prime");
    }
    else{
        console.log("Number is not prime");
    }
}
let n=prime(12);
let s=prime(7)


//Reverse a number
const reverse=(num) => {
    s=0;
    for(let i=num;i!=0;i=Math.floor(i/10)){
        var d =i%10;
        var s=(s*10)+d;
        
    }
    console.log(s);

}
reverse(12345);


//Palindrome Number

const palindrome=(num) => {
    s=0;
    for(let i=num;i!=0;i=Math.floor(i/10)){
        var d =i%10;
        var s=(s*10)+d;
    }
    if(s==num){
        console.log("Palindrome Number");
    }
    else{
        console.log("Not Palindrome Number");
    }
}
palindrome(121);
palindrome(2879);

//Display Fibonacci Series
function FibonacciSeries(n) {
    let f = [];
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        f.push(a);
        let nextTerm = a + b;
        a = b;
        b = nextTerm;
    }
    return f;
}
let n = 10;
let fibonacciSeries =FibonacciSeries(n);
console.log(fibonacciSeries)


//Sum of first 50 numbers of Fibonacci Series

function calculateFibonacciSum(n) {
    let sum = 0;
    let a = 0, b = 1;

    for (let i = 0; i < n; i++) {
        sum += a;
        let nextTerm = a + b;
        a = b;
        b = nextTerm;
    }

    return sum;
}
let n = 50;
let fibonacciSum = calculateFibonacciSum(n);
console.log(fibonacciSum);
