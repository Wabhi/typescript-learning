// function Logger(constructor:Function){
//     console.log("i am logger.......")
//     console.log(constructor)
// }

// @Logger
// class Person {
//   name='abhishek';
//   constructor(){
//     console.log("let's create a new person");
//   }
// }

// const p1 = new Person()
// console.log(p1)

// function BLogger(constructor: Function) {
//   console.log("i am logger.......");
//   console.log(constructor);
// }

// @BLogger
// class Persond {
//   name = "abhishek";

//   constructor() {
//     console.log("let's create a new person");
//   }
// }

// const p1 = new Persond();
// console.log(p1);

// function Logger<T extends { new (...args: any[]): {} }>(constructor: T) {
//   return class extends constructor {
//     constructor(...args: any[]) {
//       super(...args);
//       console.log("let's create a new person");
//     }
//   };
// }

// @Logger
// class Person {
//   name = "abhishek";
//   constructor() {
//     console.log("Original constructor has been called.");
//   }
// }

// const p1 = new Person();
// console.log(p1);

