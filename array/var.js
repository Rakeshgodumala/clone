// // function XYZ(name, age){
// //   console.log(`Hi! ${name}`)
// //   console.log(`Your age is :`)
// //   setTimeout(()=>{ 
// //   console.log(age)
// //   },1000)

  

// // }
// // XYZ('Prakash' , ()=>{
// //   console.log('14')
// // })









// // function abc(name,roll_no){
// //   console.log(`Hello ${name}  your roll_no is:`)
// //   setTimeout(()=>{

// //     // console.log(roll_no)
// //     roll_no()

// //   }, 3000)

// // }
// // abc('Arvind', ()=>{
// //   console.log(87)
// // })












// var arr = [2,4,5,67,8,87,98,3,9];
// var odd = [];
// var even = [];
// for(var ar of arr)
// (ar%2===0) ? even.push(ar) : odd.push(ar)

// // console.log(`Even numbers: ${even.sort((a,b)=>a-b)}`);
// // console.log(`ODD numbers: ${odd.sort((a,b)=>a-b)}`);


// even.sort((a,b)=>a-b);
// odd.sort((a,b)=>a-b);

// let xyzw = ()=>{
//   console.log("Even num: ", even.map((pro)=> pro).join(","))
  
  
//   console.log("Odd num: ", odd.map((pro)=> pro).join(","))
 
// }

// xyzw()




// function curying

// function abc(a){
//   return function (b){
//     return function (c){
//       return a + b + c
//     }
//   }
// }



// console.log(abc(2)(3)(4))



// Arrow function curying
// function abc(a){
//   return (b)=>{
//     return (c)=>{
//       return a + b + c
//     }
//   }
// }
// console.log(abc(2)(3)(4));


// closure example

// function outer(){
//   let count = 0;
//   return function inner(){
//     count++;
//     return count;
//   }
// }
// const fn = outer();
// console.log(fn());



// //callback function example

// function greet(name, callback){
//   console.log(`Hello ${name}`);
//   callback();
// }
// function callMe(){
//   console.log('I am callback function');
// }
// greet('Prakash', callMe);