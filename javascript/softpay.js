let number = [2,3,45,6,7,78,76]
let result = number.map(num=> 
   (num%2===0)? `Even number ${num}` :  `odd number:${num}`
  
)
console.log(result);

