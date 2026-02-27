

//***************************************this keyword how to use******************* */


// let user = {
//   name: "Arun",
//   age: 25,
//   show() {

//     console.log(this.name, this.age);               //Arun 25
//   }
// };

// user.show();





// let user = {
//   name: "Arun",
//   age: 25,
//   show() {
//     name:"kartik"
    
//     console.log(this.name, this.age);               //Arun 25
//   }
// };

// user.show();







// function test() {
//   console.log(this);                        //Window {...}   full object show
  
// }

// test();






// let user = {
//   name: "Arun",
//   show() {
//     setTimeout(function() { 
//       console.log(this.name);          //undefined  Because inside setTimeout, this = window.
//     }, 1000);
//   }
// };

// user.show();



// function greet(name, callback) {
//   console.log("Hello " + name);
//   callback(); // callback is called here
// }

// greet("Kajol",()=>{
//   console.log("hi")
// });


// let user = {
//   name: "Arun",
//   show() {
//     setTimeout(() => {
//       console.log(this.name);
//     }, 1000);
//   }
// };

// user.show();





// const details = {
//   name : "Abhishek",
//   roll_no : 89,
//   Subject : "Hindi",
//   Marks: 512,
//   Total_Marks : 600,

//   book : function(){
//     name: "Ankit"
//     return `Hi ${this.name} ,your roll no is ${this.roll_no} and your ${this.Subject} subject score is ${this.Marks} out of ${this.Total_Marks}`
//   }
// }

// console.log(details.book());





//************************************************************************************************************/




// let arr = [
//   {username:"kartik", age:30},
//   {username:"rahul", age:70},
// ] 

// console.log("username:", arr[0].username + "\n" + "age:", arr[0].age);






// console.log("username:", arr[0].username);
// console.log("username:",arr[1].username);


// console.log(arr.map((user)=> `username: ${user.username}`).join("\n"));


// console.log(arr.map(user => user.username).join("\n"));


// let username = arr.map((item)=>`username: ${item.username}`).join("\n")
// console.log(username);





///***************************************************************************** */


// let mainplain = {
//   FlightName : "Indigo",
//   FlightCode: "A270",
//   booking:[],
//   book: function(number, name){
//     console.log(`${name} booked a Flight ${this.FlightName} and FlightCode : ${this.FlightCode} and Flight Number: ${number}` );
//     this.booking.push({ 
//       // FlightName: `${this.FlightName}`,
//       // FlightCode: `${this.FlightCode}`,
//       PassengerName: name.trim(),
//       FlightNumber: number})
                                                                                                                
//   }
// }
// mainplain.book(18520, "John ")
// mainplain.book(17209, "David")
// console.log(mainplain.booking);



// let childplain = {
//   FlightName : "Air India",
//   FlightCode : "Boeing 270",
//   booking : [],
 
// }

// let book = mainplain.book
// book.call( childplain, 786,"Khalli")
// console.log(childplain)
// book.call(mainplain, 404, "kartik")
// console.log(mainplain)



//*************************************Technical suneja explaination******************************** */


// let userDetails = {
//   name: "Kamina",
//   age: 28,
//   designation: "SE",
//   printDetails: function(marks, percentage){
//     console.log(`${this.name} age is ${this.age} marks:${marks} and percentage: ${percentage}`);
    
//   }
// }


// userDetails.printDetails(72, "97%");


// let userDetails2 = {
//   name: "Kajol",
//   age: 30,
//   designation: "Java Developer",
  
// }


// let x = userDetails.printDetails
// x.call(userDetails2)


//function borrowing
// userDetails.printDetails.call(userDetails2, 77, "87%")





//example 2



// let userDetails = {
//   name: "Kamina",
//   age: 28,
//   designation: "SE",
  
// }


// let printDetails =  function(marks, percentage, another){
//   console.log(`${this.name} age is ${this.age} designation: ${this.designation} marks:${marks} and percentage: ${percentage},  person: ${another}`);
  
// }
// printDetails.call(userDetails, 71, "80%", "seema")


// let userDetails2 = {
//   name: "Kajol",
//   age: 30,
//   designation: "Java Developer",
  
// }

 //  ***********  call     function borrow  *********

// printDetails.call(userDetails2, 77, "87%", "bewda")


//****************   apply    */
// printDetails.apply(userDetails2, [77, "87%", "Rahul"])



// let newfun =  printDetails.bind(userDetails2, 77, "87%", "bewda")
// newfun()








console.log("\t\n" ? "truthy" : "falsy" );


console.log(+[]);



console.log(null == 0);
// console.log(!" ");

