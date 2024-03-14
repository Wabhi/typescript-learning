//generic functions................................................................

//const name: Array<string> =['name','email']
const strings: Array<string> = ["name", "email"];
const numbers: Array<number> = [1, 2];

// const promise : Promise<number> = new Promise((resolve, reject) =>{
//     setTimeout(()=>{
//        resolve(90)
//     },4000)
// })

// promise.then((data)=>{
//     data.split(' ')
// })

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('i m done !');
//   }, 4000);
// });

// promise.then((data) => {
//   data.split(" ");
// });

//generic function................................................................
// function mergeObject (object1:object,object2:object){
//     return Object.assign(object1,object2);
// }

// const newObject = mergeObject({name:'abhishek'},{email:'abhishek@gmail.com'});
// newObject.name //will give you error
// newObject.email //will give you error

// function mergeObject <T, U> (objectOne:T, objectTwo:U){
//     return Object.assign(objectOne, objectTwo);
// }

// const newObject = mergeObject({name:"abhishek"},{email:"abhishek@gmail.com"});
// //newObject.name //will give you error
// newObject.email //will give you error

//generic function and constrain................................................................

//1.
// function mergeTwoObject<T extends object , U extends object> (objectOne:T, objectTwo:U){
//     return Object.assign(objectOne, objectTwo);
// }

// const newObject = mergeTwoObject({name:"abhishek"},{email:"abhishek@gmail"})
// console.log(newObject.name, newObject.email);

//2.

interface lengthy {
  length: number;
}
function countAndDescribe<T extends lengthy>(element: T): [T, string] {
  let describeText = "there is no value";
  if (element.length === 1) {
    describeText = "Got one element";
  } else {
    describeText = "Got " + element.length + " elements.";
  }
  return [element, describeText];
}

console.log(countAndDescribe("Hi abhishek ! how are you ?"));
console.log(countAndDescribe(["abhishek", "tiwar"]));
console.log(countAndDescribe(""));

// function extractAndPrint<T extends object,U extends keyof T>(object:T,key:U){
//     return 'Value is ' + object[key]
// }

// extractAndPrint({},'abhishek')

function extractAndPrint<T extends object, U extends keyof T>(
  object: T,
  key: U
) {
  return "Value is " + object[key];
}
console.log(extractAndPrint({ name: "abhishek " }, "name"));

//generic classes................................................................

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];
  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }
  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
//textStorage.addItem('ddhdh')
//textStorage.addItem(10)
// textStorage.addItem('abhishek')
// textStorage.addItem('ankur')
// console.log(textStorage.getItems());
//console.log();

const numberStorage = new DataStorage<number>();
// numberStorage.addItem(20);
// numberStorage.addItem(10);
// numberStorage.addItem(39);
// numberStorage.addItem(40);
// console.log(numberStorage.getItems());
//console.log();

// const objectStorage = new DataStorage<object>();
// objectStorage.addItem({name:'abhishek'})
// objectStorage.addItem({ email: "abhishek@gmail.com" });
// objectStorage.addItem({ role: "SDE-1" });

// console.log(objectStorage.getItems())

//generic utilities types................................................................

//partial........
interface CourseGoal {
  title: string;
  goal: string;
  complete: Date;
}

function createCourseGoal(title: string, goal: string, complete: Date) : CourseGoal{
  let createCourse: Partial<CourseGoal> = {};
  createCourse.title = title;
  createCourse.goal = goal;
  createCourse.complete = complete;
  return createCourse as CourseGoal;
}


//readonly.........
const names = ['max','min']
names.push('pi')
console.log("names are.............",names)
//it will add 'pi' in names array but we don't want to do it we want to scrict the name array.

const newnamearray: Readonly<string[]>= ['abhishek','ankur']
//newnamearray.push('atul')
//it won't let you to push the new name in newnamesarray because it is readonly.

//generic types vs union types

