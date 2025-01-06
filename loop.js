// 1,for loop
// 2,while loop
// 3,do...while
// 4,for...in
// 1,for...of

// for(init; condition; increment/decrement){
//     console.log(object);
// // }
// for(let i = 1; 1<= 5; i++){
//     console.log(i);
// }
//  let i =1;
//  while(i <= 5){
//     console.log(i);
//     i++
//  }
 
// let i = 1;
// while (1<= 20){
//    if(1 % 2 === 0){
//       console.log(i)
//    }
//    i++
// }

// let i = 1;
// do{
//    console.log(i);
//    i++
// } while(i <= 5)

// let fruits = ["apple","banana","orange"];
// for(let i = 0; i < fruits.length; i++){
//    console.log(fruits[i])
// }

// let number = [10,20,30,40,50,90]
// let sum = 0;
// for(let i = 0; i < number.length; i++){
//    sum += number[i]
// }
// console.log(sum);


// let number = [1,2,3,4,5,6,7,8,9];
// let text =[];
// for(let i = 0; i < number.length; i++){
//     text += number[i]
//     console.log(text);

// }


// for(let i = 9; i>= 1; i--){
//     console.log(i)
// }

let array = [10,34,76,0,-6]
let maxvalue = array [0];
let minvalue = array [0];
let i = 1;
while(i< array.length){
    if(array[i] > maxvalue){
        maxvalue = array[i]
    }
    if(array[i]< minvalue){
        minvalue = array[i]
    }
    i++
}
console.log(`${maxvalue} maxvalue ${minvalue} minvalue`)