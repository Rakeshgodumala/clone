
//****************************************************value to String**************************************************************************888 */

//*****1.> number to String */

// let x =98;
// console.log(typeof x, x)                     //number 98
// console.log(typeof String(x),x)                  //string 98        
// console.log(typeof x.toString(),x)                 //string 98     syntax: value.toString()

//*****2.> number to Boolean */

// let y = true;
// const z = false
// console.log(typeof y,y)                                         //boolean true
// console.log(typeof String(y),y)                                  //string true
// console.log(typeof String(z),z)                                    //string true

// console.log(typeof z.toString(),z)                                  //string false
// console.log(typeof y.toString(),y)                                    //string true

// console.log(typeof String(y),z)                                  //string false
// console.log(typeof z.toString(),y)                                  //string true











//*********value to Number**************************************************************************888 */
// //String to Number
// let a = "ABCD"
// // console.log(typeof Number(a))                          //number
// console.log(typeof Number(a),a)                          //number ABCD



// //bool to Number
// let bool = "True"
// // console.log(typeof Number(bool))                             //number

// const bool = "false"
// console.log(typeof Number(bool), bool)                                   //number false


//*********value to boolean**************************************************************************888 */
 /****number to boolean */
// let a =44*2;
// console.log(typeof Boolean(a),a)                                   //boolean 88

 /****String to boolean */
//  let a = "ajay salvi"
//  console.log(typeof Boolean(a),a)                                //boolean ajay salvi


// /**********truthy************ */
// let a =-99
// console.log(Boolean(a),a)                                   //true -99



// let b =9/3
// console.log(Boolean(b),b)                                   //true 3


// /**********falsy************ */
// let z =0
// console.log(Boolean(z),z)                                 //false 0

// let y =1
// console.log(Boolean(y),y)                                 //true 1


// let bool = null
// console.log(Boolean(bool), bool)                          //false null


// let bool = 1
// console.log(Boolean(bool), bool)                          //true 1


// let bool = 0
// console.log(Boolean(bool), bool)                          //false 0

// let bool = null
// console.log(typeof bool)                                  //object


//***********type coresion */
// let name = 12 / 6  + 'ATYA' 
// console.log(name)                                                  //2ATYA


// let details =  'ATYA' + 12 + 5                             //ATYA125
// console.log(details)





function greet(name) {
  console.log("Hello " + name);
}

function processUser(callback) {
  const userName = "Rakesh";
  callback(userName);
}

processUser(greet); // Output: Hello Rakesh
