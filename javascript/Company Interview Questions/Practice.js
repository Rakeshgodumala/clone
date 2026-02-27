//Clousure


// function  Keyword(){

// let name = "Kajal";
//   function greet (){
//     console.log("Hello" + " " + name);

//   }
//   return greet;   
// }

// let result = Keyword();
// result()






// HOC

// function outer(name){
// console.log("Hello" +  " " + name);

// }

// function inner(callback){
//   console.log(callback())
  

// }
// return outer("John")
// inner(outer)




// //Encapsulation Example

// const employee = () => {

//   const name = "John Doe";
//   const position = "Software Engineer";
//   const salary = 75000;

//   const getDetails = () => {
//       console.log(`Name: ${name}, Position: ${position}, Salary: $${salary}`);
//   };

//   return {
//       getDetails
//   };
// };

// const emp = employee();
// emp.getDetails();





// let user ={
//   name :"David",
//   arrow  :  ()=>{
//     console.log(this.name);
    
//   }
// }
// user.arrow()





// document.getElementById("btn").addEventListener("click", function(){
//  setTimeout(()=>{
//   console.log("Button clicked");
//   alert("Button was clicked");

//  },3000)
// })




// function secondLongestWord(str) {
//   let words = str.split(" ");
//   let longest = "";
//   let secondLongest = "";

//   for (let word of words) {
//     if (word.length > longest.length) {
//       secondLongest = longest;
//       longest = word;
//     } else if (word.length > secondLongest.length && word !== longest) {
//       secondLongest = word;
//     }
//   }

//   return secondLongest;
// }

// console.log(secondLongestWord("Web Development Tutorial"));






// function secondLongestWord(str) {
//   let words = str.split(" ");
//   let longest = "";
//   let secondLongest = "";

//   for (let word of words) {

//     // If the current word becomes the new longest
//     if (word.length > longest.length) {
//       secondLongest = longest; // old longest becomes second longest
//       longest = word;
//     }

//     // Separate IF (not else-if!)
//     // If word is not longest, but longer than secondLongest
//     if (word !== longest && word.length > secondLongest.length) {
//       secondLongest = word;
//     }
//   }

//   return {
//     longest,
//     secondLongest
//   };
// }

// console.log(secondLongestWord("Web Development Tutorial"));




// function largest(str){
 
//   let numbers = str.split(" ").map(number);
//   let largestNum = Math.max(...numbers);
//   return largestNum;
// }


// console.log(largest("3 5 7 2 8"));



// //
// function largest(str){
 
//   let numbers = Math.max(...str)

//   return numbers;
// }


// console.log(largest([3, 5, 7, 2, 8]));




// function multiply(){
//   for (let i =1; i<=10; i++){
//     console.log(`2 x ${i} = ${2*i}`);
//   }
// }
// multiply()




function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Example:
console.log(isPrime(7));  // true
console.log(isPrime(10)); // false
console.log(isPrime(37)); // 


function countVowels(str) {
  const vowels = str.match(/[aeiouAEIOU]/g);
  return vowels ? vowels.length : 0;
}

// Example:
console.log(countVowels("JavaScript")); // 3
