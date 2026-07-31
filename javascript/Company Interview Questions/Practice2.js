// let obj = {
//   name : "Prakash",
//   age: 25,
//   user :{
//     city : "Mumbai",
//   }
// }

// let copy = {...obj}
// console.log(copy)

// obj.user.city = "Pune";
// console.log(copy)
// console.log(obj)






















// let obj1 = {
//   name : "Prakash",
//   age: 25,
//   user :{
//     city : "Mumbai", 
//   }
// }

// let copy = {...obj1}
// let DeepCopy = JSON.parse(JSON.stringify(obj1))

// obj1.user.city = "Kolkata";
// console.log(copy)
// console.log(DeepCopy)





// function xyz( city , age){
//   console.log(this.name, city, age)


// }
// let user1 = {
//   name : "Praskash",

// }

// xyz.call(user1,  "Mumbai", 25)





// function information (age, name){
//   console.log(this.city, name, age);
// }

// let user = {
// city : "India",

// }
// let res = information.bind(user, 34, "Prakash");
// res();


// let x = [1,2,3,4,5]
// let y = x.map((item)=>(item*2))
// console.log(y)





let x = [1,2,3,4,5];
let sum = x.filter ((acc, item )=>acc + item , 0
)
console.log(sum)



// function add(a){
//   return function(b){
//     return a +b;
// }
// }
// console.log(add(2)(2))



function user(){
  let name  = "Xyz";

function inner (){
  console.log("Hello", name)

}return inner;

}
let res = user();
res()




let pro = new Promise((req, res)=>{
  let success = true;
  if(success){
    req("Promise is resolved")
  }
  else{
    res("Promise is rejected")
  }
})
pro.then((data)=>{
  console.log(data)
})
.catch((err)=>{
  console.error(err)
})