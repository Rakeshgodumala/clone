// function fibonacci() {
//   let a = 0, b = 1;
//   for (let i = 0; i < 10; i++) {
//     console.log(a);
//     let next = a + b;
//     a = b;
//     b = next;
//   }
// }
// fibonacci();


// function countChars(str) {
//   let map = {};
//   for (let ch of str) {
//     map[ch] = (map[ch] || 0) + 1;
//   }
//   return map;
// }
// console.log(countChars("hello world"));



// function getWords(text) {
//   return text.split(" ");
// }
// console.log(getWords("Hello world this is Techraq"));



// const  rev = (str)=>{
// return str.split('').reverse().join('');
// }
// console.log(rev('hello john'));


// function rev(str){
//   let reverse = "";

//   for(let i=str.length-1; i>=0; i--){
//     reverse = reverse + str[i];

//   }
//   return reverse
// }
// console.log(rev("Hello People"));



// function counts(str){
// let map = {};
// for (let word of str){
//   map[word] = (map[word] || 0) + 1;
// }
// return map;
// }

// let result = counts("How are you?");
// console.log(result);



const num = [1,2,3,4]
delete num[2]
console.log(num);

console.log(num.length);

