// type Admin={
//     name: string,
//     privilages: string[],
// }

// type employee = {
//     name: string,
//     joinDate:Date,
// }

// //entersection of all admin and employee for elevated employee
// type elevatedEmployee = Admin & employee

// const e1:elevatedEmployee={
//     name:'abhishek tiwari',
//     privilages:['ad','gm'],
//     joinDate: new Date()
// }

// type combinable = string | number
// type numeric = number |boolean
// type universal = combinable & numeric

// function addition(n1:combinable, n2:combinable){
//     if(typeof n1==='string' || typeof n2==='string'){
//         return n1.toString() + n2.toString()
//     }
//     return n1 + n2;
// }

// console.log("addition is : ",addition(10, 230));
// console.log("addition is : ", addition("10", "230"));

//creating a type gaurd................................................................
// type Admin = {
//   name: string;
//   privilages: string[];
// };

// type Employee = {
//   name: string;
//   joinDate: Date;
// };

// //entersection of all admin and employee for elevated employee
// type elevatedEmployee = Admin & Employee;

// const e1: elevatedEmployee = {
//   name: "abhishek tiwari",
//   privilages: ["ad", "gm"],
//   joinDate: new Date(),
// };

// type unknownEmployee = Admin | Employee;

// // function getEmployeeInfo(emp:unknownEmployee){
// //     console.log("employee name : ", emp.name)
// //     console.log("employee privilage : ", emp.privilages);
// // }

// function getEmployeeInfo(emp: unknownEmployee) {
//   console.log("employee name : ", emp.name);
//   if ("privilages" in emp) {
//     console.log("employee privilage : ", emp.privilages);
//   }
//   if ("joinDate" in emp) {
//     console.log("employee joinDate : ", emp.joinDate);
//   }
// }

// getEmployeeInfo(e1);

// //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// class Car {
//   drive() {
//     console.log("Car driving........");
//   }
// }

// class Truck {
//   drive() {
//     console.log("Truck driving......");
//   }
//   loading(packages: number) {
//     console.log("packages loaded......");
//   }
// }

// type Vechile = Car | Truck;
// const v1 = new Car();
// const v2 = new Truck();

// function useVechile(vechile: Vechile) {
//   vechile.drive();
//   if (vechile instanceof Truck) {
//     vechile.loading(1000);
//   }
//   // if('laoding' in vechile){
//   // vechile.loading(1000);
//   // }
// }

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function movingAnimal(animal: Animal) {
  //   if ("flyingSpeed" in animal) {
  //     console.log("the speed of moving animal : ", animal.flyingSpeed);
  //   }
  //   if (animal instanceof Bird) {
  //     console.log("the speed of moving animal : ", animal.flyingSpeed);
  //     //it won't accessible we have to do something else for make is accessible.
  //     //we can
  //   }
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log("the moving speed of animal : ", speed)
}

movingAnimal({ type: "bird", flyingSpeed:180});
movingAnimal({ type: "horse", runningSpeed: 280 });


//typecasting.....
// const input1 = <HTMLInputElement>document.getElementById("num1")!;
// const input2 = document.getElementById("num2") ! as HTMLInputElement;
// console.log(input1.value,input2.value)
// if(input1){
//    ( input1 as HTMLInputElement).value ="hiii"
// }

//
// interface ErrorBoundry{
//     [prop :number]:string
// }

// const errorBag : ErrorBoundry ={
//     name:'abhishek'
// }

//index properties..............
interface ErrorBoundry {
  [prop:string]: string;
}

const errorBag: ErrorBoundry = {
  name: "abhishek",
  email:'ddjdj@gmail.com'
};

//function overload.....................

