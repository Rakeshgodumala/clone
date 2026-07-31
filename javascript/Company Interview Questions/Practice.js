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
//       console.log(`Name: ${name}, Position: ${position}, Salary: ${salary}`);
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




// function isPrime(num) {
//   if (num <= 1) return false;
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// }

// Example:
// console.log(isPrime(7));  // true
// console.log(isPrime(10)); // false
// console.log(isPrime(37)); // 


// function countVowels(str) {
//   const vowels = str.match(/[aeiouAEIOU]/g);
//   return vowels ? vowels.length : 0;
// }

// // Example:
// console.log(countVowels("JavaScript")); // 3









// let details = {
//   name : "arun",
//   age: 24,

//   //  newdetails : function (){
//   //   console.log(this.name + " " + this.age);

//   // }
// }
// // details.newdetails()

// // function hello(city){
// //   console.log(this.name , this.age, city)
// // }


// // hello.apply(details, ["mumbai"])






















////////////////////////practice


// let details = {
//   name: "xyz"
// }

// function greet(age, city){
//   console.log(this.name , age, city)

// }
// let res = greet.bind(details, 24, "mumbai")

// res()


// function outer (){
//   let user = "abhishek";

//   function inner(){
//     console.log(`Hi, How are you ${user}`)

//   }
//   return inner;
// }

// let res = outer()
// res()


// example of event loop

// need to find middle element of array





// function str(arr){

//   for(var i=0; i<arr.length; i++){

//     if(i==Math.floor(arr.length/2)){
//       return arr[i]
//     }
//   } 

// }
// console.log(str([1,2,8,4,5]))







// ********************************practice mock from https://www.youtube.com/watch?v=03aQWws01bI ******************/


// console.log(!!"")
// console.log(!!"Hello")



// console.log([] == [])
// console.log([] === [])

// console.log([] == {})
// console.log([] === {})

// console.log({} == [])
// console.log({} === [])




// const arr = [4,5,6,2,9,10]

// // let arr = [1,2,3,4,5,6]

// function maxProduct(arr){
//   let arrSort = arr.sort((a,b)=>b-a)
//   return arrSort[0] * arrSort[1];

// }
// let result = maxProduct(arr)

// console.log(result)



// merge two objects

// let obj1 = {
//   name: "Abhishek",
//   age: 24
// }

// let obj2 = {
//   city: "Mumbai",
//   profession: "Software Engineer",
// }


// let mergedObj = {...obj1, ...obj2}
// console.log(mergedObj)




// rest parameter example

// function sum(...numbers){
//   return numbers.reduce ((acc, curr) => acc + curr, 0);

// }
// console.log(sum(1,2,3,4,5))




// function example(x, ...rest){
//   return rest;
// }
// console.log(example(10, 20, 30, "hello"))   // [20, 30, "hello"]



// var a = 100;
// {
//   var x = 500;

// }
// let a = x;
// {
//   let x = 10000
// }
// console.log(a)   



// for each, map  difference : for each does not return a new array, while map returns a new array with the results of calling a provided function on every element in the calling array.


// css border and css outline : css border is part of the element's box model and takes up space, while css outline is drawn outside the element's border and does not take up space. Border can have different styles, widths, and colors, while outline is typically a single line that can be used for highlighting or focus indication.