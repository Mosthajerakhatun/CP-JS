// function first (name){
//     console.log("Hello" + name);
// }
// first("karim")
// first("Rahim")

// function sum (a,b){
//     console.log(a+b);
// }

// sum(10,20);
// sum(10,1000);

// function myFunction(sum){
//     document.getElementById("test").innerHTML = "how"
// }
// myFunction();


// function sum (x,y){
//     document.getElementById("test").innerHTML = (x+y);
// }
// sum(10,30);

// function multi(a,b){
//     return a * b;
// }
// let result = multi(10,20);
// console.log(result);

// function test(){
//     console.log (demo1);
//     return "finsh";
//     console.log ("demo2");
// }

// // 1. Name function
// function multi(a,b){
//     return a*b;
// }
// console.log(multi(2,4));

// // 2.Anoymous Function
// const divide = function(a,b){
//     return a / b;
// }
// console.log(divide(10/2));

// 3.Arrow function (ES6)
// const sub = (a,b) => {
//     return a - b;
// }
// console.log(sub(10,5));


// function myFunction(a,b){    
//     return a + b;
// }
// console.log(myFunction(10,20))

// // default parameters
// function greet(name = "user"){
// return `Hi ${name}`
// }
// console.log(greet("Salma"));

// function isCheck(number){
//     if(number % 2 === 0){
//         return"Even"
//     }else{
//         return "Odd"
//     }
// }

// console.log(isCheck(6887686));

// function calculate(arr){
// let sum = 0;
// for(let i = 0; i < arr.length; i++){
//     sum += arr[i];
// }
// return sum;
// }
// console.log(calculate([10,20,33]));


// function calculate(arr){
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 === 0){   
//             sum += arr[i]; 
//         }
//     }
//     return sum;
//     }
//     console.log(calculate([10,20,32,87,90,43]));


// function calculate(arr){
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 !== 0){   
//             sum += arr[i]; 
//         }
//     }
//     return sum;
//     }
//     console.log(calculate([10,20,32,87,90,43]));

// function multi(number){
//     let nam = "";
//     for(let i = 1; i <= 10; i++){
//         nam +=`${number} * ${i} = ${number * i}\n`
//     }
//     return nam;
//     }
// console.log(multi(10));

// function greet(name = "user"){
// return `Welcome ${name}`
// }
// console.log(greet("Admin"));

// function check(role){
// if(role ==="admin"){
//     return "Welcome Admin !"
// }else if(role === "user"){
//     return "Welcome User !"
// }
// }
// console.log(check("user"));


function validEmail(email){
    const check = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const valid= check.test(email)
    if(valid){
        return`${email} you are valid email`
    }else{
        return`${email} you are invalid email`
    }
}
console.log(validEmail('hajera@gmail.com'));

// function checkName(name){
//     if(name.length >=10){
//         return"long";
//     }else{
//         return"short";
//     }
// }
// console.log(checkName("Hajera"));

// function checkNumber(a,b,c){
//     if(a > b && a > c){
//         return`${a} is large`
//     }else if( b > a && b > c){
//         return`${b} is large`
//     }
//     else{
//         return`${c} is large`
//     }
// }
// console.log(checkNumber(10,20,5));


// function checkValidity(number){
//     if(number.length === 11){
//         return`Valid`
//     }else{
//         return`Invalid`
//     }
// }
// console.log(checkValidity("43256718943"))





















    