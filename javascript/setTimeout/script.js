

//  var  timeoutId;

let btnEle = document.querySelector(".btn");

// btnEle.addEventListener('click', ()=>{ 
//   timeoutId = setTimeout(()=>{
//     console.log('You click but it work after 5 second because of setTimeout')
//   },1000)

  

//   console.log('Algebra')
// })

// *************************clearTimeout to acces this we need to store in id setTimeout aslo hold id  ie: created timeoutId

let stopbtn = document.querySelector(".btn2");
// stopbtn.addEventListener("click",()=>{
//   clearTimeout(timeoutId)

// })

const paraEle = document.querySelector(".para")
btnEle.addEventListener("click", ()=>{
   setInterval(()=>{
     paraEle.innerHTML+= `<p>jiojioj</p>`
   }, 1000)
})



