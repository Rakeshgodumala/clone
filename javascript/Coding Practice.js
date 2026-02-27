// function reverse(str){
//   return  str.split("").reverse().join("")
 
//  }
 
//  console.log(reverse("hello"))




// function longestsentence(str){
//   let words = str.split(" ")
//   let sentence = '';

//   for (let word of words){
//     if(word.length > sentence.length ){
//       sentence = word;
//     } 
//   }
//   return sentence;

// }

// console.log(longestsentence("I am Learning JavaScript"))



// const removeDublicate = (arr) =>{
//   return [...new Set(arr)];

// }
// console.log(removeDublicate([1,2,4,1,2,3,6,7,4]));





// function countvowel(e){
//   let count = e.match(/[aeiouAEIOU]/g);

//   return count ? count.length : 0;
// }

// console.log(countvowel("Javascript"));



 

// const xyz = (n) =>{

// if ((n===0 || n===1) ){
//   return 1;
// }
// return  n * xyz (n-1);

// }
// console.log(xyz(3))


function largest(arr){
  return Math.min(...arr)

}
console.log(largest([20,448,93,999,2]));
