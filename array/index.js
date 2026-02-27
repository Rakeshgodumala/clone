// for(let i=10; i>=0; i--)
//   console.log(i) 



// let myarr = ["Apsa", 'Alina', 'Alex', "alexa", 134,84, 'UJHGJH'];

// for (let value of myarr){
//   console.log(value)
// }




let str = {
  name: "Alexa",
  brand: "Amazon",
  subject: "E-commerce",
  marks: 500,
  jerry: "tacto",

}

for(let details in str){
  console.log(details)
}










// for(let x=0; x<=50; x++){
//   if(x%2===0){
//     console.log(x);
    
//   }
// }

// for(let x=100; x>=50; x--)
//   x%2===0 ? console.log(x) : null;
  
``

// function ABC(x,y){
// console.log(x*y)
// }
// ABC(3,4)










//********************SAKESH SOLUTION ASSESMENT***************/




// let a = [1, 2];

// let b = a;

// a.push(3)

// console.log(b.length, b);






// console.log(!!"" && !!"0");







// const obj = {
//   name: "Bob",
//   greet: function() {
//   setTimeout(() => console.log(this.name), 0);
//   }
//   };
  
//   obj.greet();




// let a = [1, 2];

// let b = a;

// a.push(3);

// console.log(b.length);




// const add = (a) => (b) => a + b; 
// console.log(add(2)(3))




// console.log(NaN === NaN);




// const person = { name: "Alice" };
// const details = { age: 30 };
// Object.setPrototypeof(details, person);
// console.log(details.name);






// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(1), 0);
//   }
  



// let x = 10;
// function foo(){
//   console.log(x);
//   let x = 20;


// }
// foo();





// function foo() {

//   return { a: 1 };
  
//   }
  
//   const result = foo();
  
//   console.log(result instanceof Object);
  






// const obj = { a: 1 };

// Object.freeze(obj);

// obj.a = 2;

// console.log(obj.a);


// console.log(0.1 + 0.2 === 0.3)























// function * generator() {

//   yield 1;
  
//   yield 2;
  
//   }
  
//   const gen = generator();
  
//   console.log(gen.next().value + gen.next().value)






// setTimeout(() => console.log("A"), 0);
// Promise.resolve().then(() => console.log("B"));
// console.log("C");


 
// console.log(typeof null)







// for (var i = 0; i < 3; i++) {

//   setTimeout(() => console.log(i), 0);
  
//   }