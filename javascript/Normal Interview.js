// let xyz = [1,2,3,4,5,6.9,98,34,9,10]

// let sum = 0;
// let even = [];
// let odd = [];


//  for (let total of xyz){
//   sum = sum + total
//  }
//  let avg = sum/xyz.length;
 



//  console.log(`Sum : ${sum}`);
//   console.log(`Average: ${avg}`)

//  for(let myarr of xyz){
//   (myarr%2===0) ? even.push(myarr) : odd.push(myarr)

//  }

   
//  console.log(`Even Number are: ${even}`)
//  console.log(`Odd Number are: ${odd}`)
 






// const abc = {
//   name: "abishek",
//   age: 25,
//   address: "Mumbai"
// }

// let xyz = {
//   ...abc,
//   name:"Ankit",
// }

// const {name, ...pqr} = abc;
// console.log(pqr, xyz);







// largest number and second largest number find
  // this is with array


// let arr = ["JAVASCRIPT", "PYTHON","REACT.JS","JAVA"];
// function str(arr){
//   let longest = "";
//   for(let word of arr){
//     if(word.length > longest.length){
//        longest = word
//     }
//   }
//   return longest

// }
// console.log(str(arr));


// let arr = ["REACT","JAVA", "Javascript", "python"];
// function str(arr){
//   let longest = "";
//   let secondLongest = "";
//   for(let word of arr){
//     if(word.length > longest.length){
//       secondLongest = longest
//        longest = word
//     }else if (word.length > secondLongest.length &&  word !== longest){
//       secondLongest = word
//     }

//   }
//   return secondLongest

// }
// console.log(str(arr));










// let arr = "Javascript is a Programming language"

// function str(arr){
//   let words = arr.split(' ');
//   let longest = "";
//   for(let word of words){
//     if(word.length > longest.length){
//        longest = word
//     }
//   }
//   return longest

// }
// console.log(str(arr));





// let arr = "Javascript is a Programming language"

// function str(arr){
//   let words = arr.split(" ");
//   let longest = "";
//   let secondLongest = "";
//   for(let word of words){
//     if(word.length > longest.length){
//       secondLongest = longest
//        longest = word
//     } else if (word.length > secondLongest.length && word !== longest){
//       secondLongest = word

//     }

//   }
//   return secondLongest

// }
// console.log(str(arr));







// let str = [10, 12, 6, 9, 19]
// let target = 15;

// for(let i = 0 ; i<str.length; i++){
//   for(let j=i+1; j<str.length; j++){
//     if(str[i] + str[j] === target ){
//       console.log(`Array of ${str[i]} + ${str[j]} = ${target}`)
//       console.log(`Index  is ${i} and ${j} `)

//     }
//   }
// }




// console.log(isNaN("8"))
// console.log(isNaN(8))

// console.log(isNaN("Arijit Singh"))





// let x = [1,2,3,4,5]
// // let y = x.map((arr)=> arr > 5 )
// // let y = x.map((arr)=> arr = 5 )
// let y = x.map((arr)=> arr >= 5 )


// console.log(y)



// console.log(typeof null)    // object  this is historical bug  devloper not fixed. null is primitive datatype


// console.log({} === {})

// console.log({} == {})








//reverse

// function reverses(str){
//    return str.split("").reverse().join('');
 
// }

// console.log(reverses("hello"))


//largest

// var arr = "Hi, I am Developer"
// function largest(str){

//   let words = str.split(' ');
//   let longest = "";
//   for(let word of words){
//     if(word.length > longest.length){
//       longest = word
//     }

//   }
//   return longest

// }
// console.log(`longest word: ${largest(arr)}`);



//second largest

// var arr = "Hi, I am's Developer"
// function largest(str){

//   let words = str.split(' ');
//   let longest = "";
//   let secondlongest = "";
//   for(let word of words){
//     if(word.length > longest.length){
//       secondlongest = longest
//       longest = word

//     }else if(word.length > word.secondlongest && word  !== longest){
//       secondlongest = word
//     }
//   }
//   return secondlongest

// }
// console.log(`second longest word: ${largest(arr)}`);





//palindrone

var str = "algebra"
function palindrone(arr){
  let result = arr.split("").reverse().join("")
if(str === result){
  console.log(`${result} is palindrone`)
}else{
  console.log(`${result} is not palindrone`)

}
 
}
palindrone(str);
