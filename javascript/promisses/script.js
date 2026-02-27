var x= new Promise((res, rej)=>{
    let name = "Abcd";
    if(name === "Abcd"){
      res("It is true")
    }else{
      rej("it's failed")
    }
})
console.log(x)