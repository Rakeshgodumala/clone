// function performOperation(a, b,callback){

// const { start } = require("init")

  

//   let result = a + b;
//   setTimeout(()=>{
//     callback(result);
//   },2000)
//   callback(result);
// }

// function displayResult(result){

//   console.log("result :", result);
  
// }

// performOperation(2,3, displayResult);














// let nums = [1,2,3,4,5];
// let result = nums.map((num,index)=>{
//   return `Index is: ${index}, Square is: ${num * num} `

// } );

// console.log("Square number is: ", result);



// let nums = [1,2,3,4,5];
// let res = nums.map((num,ind)=>{
// return `Index: ${ind}, square: ${num * num}` 
  
// })
// console.log("Square number is: ", res);

















/// ***********************output what is it*************************


// function test() {
//   // let myVar = 10;
//   console.log(myVar);
// var myVar = 10;
 
//   console.log(myVar);
// }



// test()






// const user = {
//   firstName: 'Piyush!',
//   getName() { 
//     const firstName = 'Jen!';
//     return this.firstName;
//   }
// };
// console.log(user.getName());

















// 2255555555555555555555555555555555555555
// nrmal practice

// let number = [1,2,3,4,6]
// for (let num of number){
//  (num < 7) ? num  : null;
//  console.log(num * "2")
// }




// let number = [1,2,3,4,6];

// console.log(number.map((num)=>num*4))





// Turbomodus company
// function multiply1(){

//   for(let i=1; i<=10; i++){
//     console.log("10 x ", i, "=", 10 * i)
//   }

// }
// multiply1()



// function multiply(){
//   for(let i = 1; i<=10;i++){ 
//     console.log(`3 x ${i} = ${3*i}`);
//   }

// }
// multiply()





// const multiply = {                   // ✅ OBJECT (not function)
//   muliplt_table: "Multiply of 3 Tables", // ✅ object property

//   mul: function () {                 // ✅ valid object method
//     console.log(this.muliplt_table); // ✅ this refers to object

//     for (let i = 1; i <= 10; i++) {
//       console.log("3 x", i, "=", 3 * i);
//     }
//   }
// };

// multiply.mul();                      // ✅ object method call






function xyz(city,country){
  console.log("name :"+ this.name);
  console.log("city :" + city);
  console.log("country :"+ country);

  
} 
 
let user = {
  name:"piyush"
}
let res = xyz.bind(user,"mumbai", "india");
res()