


// function Abc(n) {
//   for (var i = 0; i <= n; i++) {
//     console.log(i);
//   }
// }

// Abc(20);



// function xyz(a,b){
//   c = a +b;
//   console.log(c);                                                //it is storing in c 
  

// }
// xyz(3,5)



// function abc(x,y){ 
//   return x * y;                                              // return terminates execution  of x  *  y  and store in same  abc 
// }
//  console.log(abc(5,6));






const user = {
  name: "Rakesh",
  greet: function() {
    
      console.log(`Hello, ${this.name}`);
  }
};
user.greet(); // Output: Hello, Rakesh
