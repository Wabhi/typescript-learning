// type combinable = string | number
// type numeric = number | boolean

// function add(n1:number, n2:number):number
// function add(n1:string, n2:string):string
// function add(n1:string, n2:number): string;
// function add(n1:number, n2:string): string;
// function addition(n1:combinable, n2:combinable){
//     if(typeof n1==='string' || typeof n2==='string'){
//         return n1.toString() + n2.toString()
//     }
//     return n1 + n2;
// }

//const result = add(2,3)
//const result = add('abhishek','tiwari')
//const result = add(2, "tiwari");
// const result = add('abhishek',3)
// result.split(' ')


// const input = "";
// const result = input || "default"; //not a good way it will check if it is null or undefined if not then default.
// //but we don't want to check like this if input is empty then it will always go to default
// //then, here we can go for nullish coalescing

// const result = input ?? "default"; 