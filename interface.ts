// interface Person{
//     name: string,
//     email: string,
//     role: string,
//     department: string,
//     address: string,
//     getInfo(phrase: string):void 
// }

// let user1 : Person
// user1={
//   name: "abhishek",
//     email: "abhi@gmail.com",
//     role: "SDE-1",
//     department: "FE",
//     address: "Bangalore",
//     getInfo(phrase:string):void{
//     console.log("Hiiiiiii",this.name,this.email,this.role)
//     }
// }

// user1.getInfo


interface Greetable {
  name: string;

  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

let user1: Greetable;

user1 = new Person("Max");

user1.greet("Hi there - I am");
console.log(user1);