let user = {
  name: "Abhijeet",
  age: 21,
  greet() {
    name = "arun";
    this.last_name = "Kamble";
    console.log(`Hi ${this.name} ${this.last_name}`); 
  },
};
user.greet();
