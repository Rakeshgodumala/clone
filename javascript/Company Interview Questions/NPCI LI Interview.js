// let arr = [0, 1, [2, [3, [4, 5]]]];
// let result = arr.flat(Infinity)
// console.log(result);


// let arr = [0, 1, [2, [3, [4, 5]]]];
// let result = arr.flat(Infinity)
// console.log(result);






// const arr = [0, 1, [2, [3, [4, 5]]]];

// function flattenArray(input) {
//   let result = [];

//   for (let item of input) {
//     if (Array.isArray(item)) {
//       result = result.concat(flattenArray(item));
//     } else {
//       result.push(item);
//     }
//   }

//   return result;
// }

// console.log(flattenArray(arr));



// 1] Create an variable to store the data
// 2] loop through each element input array
// if arr element recursively call the functionon it and merge  the result 
// if element is not arr then add it to result array 
// return








const arr = [0, 1, [2, [3, [4, 5]]]];

function flatten(input) {
  let result = [];

  for (let item of input) {
    if (arr.isArray(item)) {
      result = result.concat(flatten(item));
    } else {
      result.push(item);
    }
  }

  return result;
}

console.log(flatten(arr));

