// const result = (num) =>{
//   return num * num

// }
// const fn = result(8);
// console.log(fn)

// --------------------------------

// anonymous function is a function that is not assigned a name or identifier.
// the below is anonymous function because no function name and it is function expression because  it assigned a value     arr


// let arr = function(add){
//   return add+1
// }
// console.log(arr(19))





// function arr(add){
//   return add+1
// }
// let result = arr(5)
// console.log(result)

 

//  function arr(add){

//  console.log(add *add)
// }

// arr(3)



// -----------------------------------------------

// console.log({}!={});



// ---------------------------




// const arr = (num) =>{
//   return  num * num
// }

// const xyz = (pqr)=>{
//   return pqr
// }

// console.log("square is" , xyz(arr(10)))






// const arr = (num) =>{
//   return  num * num
// }

// const xyz = (pqr)=>{
  
//   console.log("square is" , pqr(9))
// }

// xyz(arr)



///..........................IIFE



// (
// function square(num){
//   console.log(num * num)
// }(5))


// (function (x){
  
//   return (function (y){
//     console.log(x)
//   })(2);
// })(3);








//-------------hoisting



// xyz()       // in function, we dont have  a function name as undefined we have the complete function it works if you call before or after 
// function xyz(){
//   console.log("Hi, How are you?")

// }



// console.log(x)              // undefined
// var x = 10;



// console.log(x)              // Reference Error
// let x = 10;





// xyz()      
// function xyz(){
//   console.log(x)                       // HOISTING

// }
// let x = 20;                             // REFERENCE ERROR
// var x = 30;                             // Undefined 



 
 





// var x = 50;

// var func = function (){
//   console.log(x);
//   var x = 60
  
// }
// func()