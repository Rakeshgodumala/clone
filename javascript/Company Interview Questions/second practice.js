// let arr = [1,2,3,4,5,6,7,8,9,10,15]
// let sum = 0;
// let even = [];
// let odd = [];

// for(let myarr of arr){
//   sum = sum + myarr;
// }
// let average = sum/arr.length;

// for(let myarr2 of arr){
//   (myarr2 %2 === 0) ? even.push(myarr2) : odd.push(myarr2);

// }

// console.log("Average:" , average);
// console.log(`Even numbers are : ${even.join(",")}`);
// console.log(`odd numbers are : ${odd.join(",")}`);






// let array = [12, 45, 23, 67,[1223,4,45,6], 78, 90, [34, 56, 78, 89], 100];
// console.log(array.flat().join(" , "));





// console.log(a)
// console.log(b)

// var a = 10;
// let b = 20



//longest  word
let str = "I am a software developer"
let longest = "";
let words = str.split(" ");
for(let word of words){
  if(word.length > longest.length){
    longest = word;
  }
  return word
}


