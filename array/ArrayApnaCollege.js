// let arr = [10, 20, 30, 40 , 50]
// for (array of arr)
//   (array>=20) ? console.log(array) : null;



let myarr = [1,2,3,4,5,6,7,8,9,10,18,37,76,90]   
let sum = 0;
let even = []
let odd = []
for(let total of myarr){
  sum +=total;
}
let avg = sum/myarr.length;



for(let arr of myarr)
(arr%2===0) ? even.push(arr) : odd.push(arr);

console.log(`Even Numbers are: ${even.join(",")}`)
console.log(`Even Average : ${avg}`)
 
console.log(`Odd Numbers are: ${odd.join(",")}`)
console.log(`Odd Average : ${avg}`)



 



  
// const x = [1,2,3,4,5]
// for(y of x)
//   if(y>=5) {
//     console.log(x)
//   }else{
//     console.log("empty")
//   }



// let n= 50;
// const num = [10,30,70,82,77];
// for(let arr of num)
// // (arr >=n) ? console.log(arr, "it is more than 50"): console.log(arr, "it is less than 50")
// (arr >=n) ?console.log(`${arr} is greater than ${n}`) : console.log(`${arr} is smaller than ${n}`)



//  const array = [ 124, 8, 98, 128,99]
//   for(let arr of array)
//   (arr > 80) ? console.log(arr,"it is  > than 80") : console.log(arr,"it is  < than 80")
  


// const arr = [1,2, 3, 4,5,6,89,7, 88]
// for(array of arr)
// (array%2===0) ? console.log(array) : null  ;






// let array =[2,4,1,3,6,8,7,10,15,20,16,80];
// for( let arr of array)
// (arr %2===1) ? console.log("odd no. is", arr) : console.log("even no. is", arr)


// let x = ["jkdhjkfd",'KKKhefwkj', 'jwdhuefyuw', 'kjuihefuiu',34726743,5465,65];


// for(let y=0; y<x.length; y++){
//   console.log(x[y])
// }







// let arr = ["JJDkdhjkfd",'KKKSDYGwkj', 'jwdFDFDSFefyuw', 'FSFSF']
// for (let newarr of arr)
// {
//   console.log(newarr);

// }

// ************************Average**************//

// let rupees = [10, 20, 30, 40, 60, 49, 588, 37]
// let sum = 0;

// for (total of rupees){
 
//    sum += total;

  
// }
// let avg = sum/rupees.length

// console.log(`Avg rupees is ${avg}`); 



























// let rupees = [1,2,3,4,5,6,7,8,9]
// sum = 0;
// for(total of rupees){
//   sum = sum+total;
// }
// let avg = sum/rupees.length
// console.log(`the Average of the rupees is ${avg}`)


  

// let items = ["banana", "mango", 'onion', 'Watermellon', 'Apple']
// items.pop( "hsdh", "kela")
// // // items.pop()
// console.log(items);



// Using character codes
// const start = 'A'.charCodeAt(0) / 'A'.charCodeAt(0); // 'A'.charCodeAt(0) gives 65, dividing gives 1
// const end = 'd'.charCodeAt(0); // 'd'.charCodeAt(0) gives 100

// for (let i = start; i <= end; i++) {
//   console.log(i);
// }







// console.log("5" + 3)
// console.log("5" - 3)
// console.log("5" * 3)
// console.log("5" / 3)for(total of num){
//   sum += total;
// }

// const avg = console.log("The avg of the above number is :",  sum/num.length)



///////////Examples///////
// let arr = ['an', 'a', 13, "Mhsnj","Banana","aYour name" ]

// console.log(arr[5]);    // //aYour name




///////////object  for in 


// let score = {
//   English: 70,
//   Science: 90,
//   Geography: 87,
//   Hindi: 99,
//   Marathi: 67
// }
  
// for (let i = 1; i <= 50; i++) {
//   if (i % 2 === 0) {
//       console.log(i);
//   }
// }


// for(let subject in score)
// (score[subject]>=90) ? console.log("you are intelligent because your marks are very good in ", subject) : console.log("you are average because your marks are very less in ", subject)


// let ages = [12, 34,17, 29,36, 30, 25, 15]
// for(let age of ages)
// (age>=18) ? console.log(`your are eligible for Election ${ age}`) : console.log(`your are not eligible for Election ${age}`)

   
// let x = [20, 13, 16,19, 25,18, 23]

// for( y of x){
// // (y>=18) ? console.log(`you are adult ${y}`) : console.log(`you are minor ${y}`);
// // (y>=18) ? console.log("you are Adult",y) : console.log("you are kid",y);
// if(y>=18){
//   console.log(`you are big ${y}`);
// } else {
//   console.log(`you are small ${y}`);
// }


// }



// let x = "18";
// if(x>=20){
//   console.log("you are adult",x);
// } else if(x===18){
//   console.log("you are talented",x)
// } else{
//   console.log("you are excellent", x)
// }

































// let arr = ["Mango", "Banana", " Lelea", "Parrot", "Lomdi"]
// console.log(arr)

// let array = arr.pop()
// console.log(arr.toString())
// console.log(array)





// *****************slice************8888888

// let x = [1,2,3,6,8]
// console.log(x.slice(1,3))     




// ************ splice***************




















//////////////////////////////////////////////////////js instagram video basic/////////


// if([0]==0){
//   console.log("true");
// }else(
//   console.log("False")
// )






// let arr = ["red", "blue", "green"]
// const remove = arr.pop()

// // document.write(arr.join(",  "))
// console.log(arr)
// console.log(remove)




// const lang = ["js", "html", "react"];
// lang.unshift("css");
// // document.write(lang);
// console.log(lang)


// let num1 = ["hre", "jkhkjfd", "khuh"]
// let num2 = ["hjh","hj"]
// let number = num1.concat(num2)
// console.log(number)



// let num = [1,2,3,4,5,6]
// let num1 = num.splice(2,2,101,102);
// console.log(num)



// let x = 10;
// x += 5;  // x = x + 5 → 15
// x -= 3;  // x = x - 3 → 13
// x *= 2;  // x = x * 2 → 26
// x /= 4;  // x = x / 4 → 6
// console.log(x); // Output: 6

// console.log(x)

// let age = 20;
// (age >18) ? console.log("eligible", age) : console.log("not eligible", age)




///////April 12


// let x= 20;
// (x%2 === 0 ? console.log("it is even:",x): console.log("it is odd:", x))




// let y = [1,4,3,5,6,8,9,19,17,88]
// y.forEach(x=>(x%2===0 ? console.log(`it is even ${x}`) : console.log(`It is odd ${x}`)))



// let x = 20;
// (x>=15 ?console.log(`${x} is more`): console.log(`it is less`))




// let x = [20, 30 ,12];
// for(y of x)
// (y>=15 ?console.log(`${y} is more`): console.log(`${y}it is less`))

// let x = [1,34,5,6,72,78,3,54]
// let y = [...x].sort((x, y)=> x - y)
// console.log(`Assending order numbers: ${y} `)
// let z = [...x].sort((a,b)=> b - a)
// console.log(`Descending order numbers: ${z} `)





































// const arr = [1,2,3];                                       /////  2 index num is 3 . total length is 3
// arr[4] = 99;                                 //// agar arr[2]  and initial 3 length  which is < 2  then output 3 only no change  but if arr[4] initail 3 length and 4> 3 then which is extra 1 ie:  first length and arr[4]means that 3,4 this 2 num ie  3 + 2= 5
// console.log(arr.length);                                             ////ouput = 5

