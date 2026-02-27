
// for (let i = 1; i <= 50; i++) {
//   if (i % 2 === 0) {
//       console.log(i);
//   }
// }


// let str = "Welcome to Welcom"
// let str1 = str.indexOf("o");     //11
// console.log(str1);




///Higher Order Function

// function hof(xyz){
//   return "Hello" + xyz


// }
// function hof1(abc){
//   console.log(abc(" World"))

 
// }
// hof1(hof)



// const num = [1,2,3]
// let sum = [...num , " " , "i love you" , 6]
// console.log(sum);





// function currying is a process that breaking a function that takes multiple arguments into a series of functions that take one argument at a time

function add(x){
  return function(a){
    return function(b){
      return function(c){
        return x * a + b + c;
      }
    }

  }
}
console.log(add(2)(3)(4)(8));
