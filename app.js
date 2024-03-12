// function add(
//   number1: number,
//   number2: number,
//   showResult: boolean,
//   resultMessage: string
// ) {
//   const result = number1 + number2;
//   if (showResult) {
//     return resultMessage + result;
//   } else {
//     return result;
//   }
// }
// //let num : number
// //num=10
// const number1 =4
// const number2 =5
// const showResult = true;
// const resultMessage = "The result is : ";
// console.log(add(number1,number2, showResult, resultMessage));
// const person={
//     name: "John",
//     age:23,
//     city:"New York"
// }
// const person:{} = {
//   name: "John",
//   age: 23,
//   city: "New York",
// };
// const person: Object = {
//   name: "John",
//   age: 23,
//   city: "New York",
// };
// const person: {
//     name: string;
//      age?: number;
//     city: string;
// } = {
//   name: "John",
//   age: 23,
//   city: "New York",
// };
//console.log(person.email); //Property 'email' does not exist on type '{ name: string; age: number; city: string; }'.ts(233
//console.log(person.name);
console.log("Hiiii");
// Of course object types can also be created for nested objects.
// Let's say you have this JavaScript object:
// const product = {
//   id: 'abc1',
//   price: 12.99,
//   tags: ['great-offer', 'hot-and-new'],
//   details: {
//     title: 'Red Carpet',
//     description: 'A great carpet - almost brand-new!'
//   }
// }
// This would be the type of such an object:
// {
//   id: string;
//   price: number;
//   tags: string[];
//   details: {
//     title: string;
//     description: string;
//   }
// }
// So you have an object type in an object type so to say.
// const person={
//     name: 'John',
//     email: 'john@example.com',
//     company:['a','n','c']
// }
// // let arr :string[]
// // arr['1',9]
// const person :{
// name:string
// email:string
// roles:string[],
// departments:[string,number]
// }={
//   name:'John',
//   email:'john@example.com',
//   roles:['itd',''],
//   departments:['3',1000]
// }
// console.log(person.email)
// function add(num1: number | string, num2: number | string) {
//   let result;
//   if (typeof num1 === "number" && typeof num2 === "number") {
//     result = num1 + num2;
//   }else{
//     return num1.toString() + num2.toString();
//   }
//   return result;
// }
// console.log(add(10, 30));
// console.log(add('30', '20'));
// type user ={
//   name:number,
//   email:string,
//   phone:string,
//   address:string,
//   age:number
// }
// const employee: user = {
//   name: 'John',
//   email: 'john@example.com',
//   phone: '555-555-4444-44',
//   address:'HSR Layout',
//   age:30
// }
// console.log(employee.phone)
