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




function xyz(roll){
  console.log(this.name, roll)

}

let users = {
  name: "rjj",
  
}
xyz.apply(users,[ 30])