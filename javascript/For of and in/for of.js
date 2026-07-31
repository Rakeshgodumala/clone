// let num = [1,2,3,4,5];
// for(const val of num){      ///here val is a iterator variable  and num is an iterable object
//   console.log(val);
// }



////////// ************** option *******************///
// for(const [index, val] of num.entries()){   /// here we are using * destructuring * to get the index and value from the array . here index and val are iterator variables and num is an iterable object
//   console.log(index, "-", val)    // this will print the index and value of the array
// }






// let nums = new Map()
// nums.set("IN", "India")
// nums.set("US", "USA")
// nums.set("US", "USA")       /// set ia used for unique values so it will not add duplicate values
// nums.set("EST", "East Costal")
// nums.set("FR", "France")
// // console.log(nums)


// // for(const vals of nums){
// //   console.log(vals);          // this will print the key and value in * array * format
// // }

// for(const [key, val] of nums){   /// here we are using * destructuring * to get the key and value from the map . here key and val are iterator variables and nums is an iterable object
//   console.log(key,"-", val)
// }