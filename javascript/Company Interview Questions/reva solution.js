// function performOperation(a, b,callback){
  

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












/// ***********************output what is it*************************


// function test() {
//   // let myVar = 10;
//   console.log(myVar);
// var myVar = 10;
 
//   // console.log(myVar);
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






// let user ={
//   name: "Piyush",
//   age: 25,
//   city: "Delhi",
//   show(){
//     console.log(this.name, this.age, this.city);
    
//   }
// }
// user.sho2()




// function xyz(roll){
//   console.log(this.name, roll)

// }

// let users = {
//   name: "rjj",
  
// }
// xyz.apply(users,[ 30])






 


////practice

// function curring is the process breaking a function that takes multiple arguments into a series of functions that take one argument at a time.


// function xyz(a){
//   return function (b){
//     return function(c){
//       return a + b + c;
//     }
//   }
// }
// console.log(xyz(1)(2)(3));




// function xyz(){

//   let str = "Alpha";

//   function inner(){
//     console.log(`Hi, ${str}`);
//   }

//   return inner;
// }

// let result = xyz();
// result()





// let xyz = {
//   name : "Nikhil",
//   roll_no : 23,
//   show : function(){
//     console.log(this.name, this.roll_no);
//   }
// }
// xyz.show()



// function verify(name, age){
//   console.log(name, age, this.city);



// }

// let add = {
//   city : "Mumbai",
// }

// verify.apply(add, ["karan", 83])




// async function xyz(){
//   const result = await fetch ("https://jsonplaceholder.typicode.com/posts/1");
//   const data = await result.json();
// }
// console.log(xyz());



// function xyz(){
//   setTimeout(()=>{
//     console.log("Hello world");
//   }, 2000)
// }xyz()

// console.log(100 + '8' + 20)
// console.log("100" + '8' + 20)
// console.log(100 - '8'- 20)
// console.log("100" - '8' + 20)


// let xyz = ["abc", "def", "ghi", "jkl"]

// let ans = xyz.includes("DEF");

// console.log(ans);



let x = 100;  //100
// let y =++x;   // x = 101, y = 101
let y  = x++    // y = 100, x = 101
console.log(x+y)