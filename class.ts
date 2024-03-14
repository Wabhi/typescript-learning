// // class Department {
// //   name: string;
// //   role: string;
// //   constructor(n: string, r: string) {
// //     (this.name = n), (this.role = r);
// //   }
// //   getInfo(this:Department) {
// //     console.log("My name is : ", this.name);
// //   }
// // }
// // const d1 = new Department('Development','Software Developer')
// // console.log(d1)
// // d1.getInfo();
// // const newD1 = { name:'dd',new_dep: d1.getInfo };
// // newD1.getInfo();
// // console.log(d1);

// class Department {
//   //   id: string;
//   //if we want to make read only property for class then we need 'readonly' property
//   //we can't make change in id later
//   name: string;
//   readonly id: string;
//   //make employee is not accessible outside from class "private keyword"
//   //private employee: string[] = [];
//   //we can make employee as protected what it does, it make accessible within the class which is inheritated
//   //from other classes but it is not accessible outside of class.
//   protected employee: string[] = [];
//   //by default it is public
//   //private employee: string[] = [];
//   //   constructor(name: string, employee: string[], id: string) {
//   //     this.name = name;
//   //     this.employee = employee;
//   //     this.id = id;
//   //   }

// //   constructor(name: string, id: string) {
// //     this.name = name;
// //     this.id = id;
// //   }
// //   getInfo(this: Department) {
// //     console.log("My name is : ", this.name);
// //   }
// //   addEmployee(employee: string) {
// //     //this.id = "dddd"; you can't change if it readonly
// //     this.employee.push(employee);
// //   }
// //   getEmployeeInfo() {
// //     console.log("My name is : ", this.employee);
// //     console.log("My employee array length is : ", this.employee.length);
// //   }
// // }

// // class FrontedDepartment extends Department {
// //    private auth :string;
// //   //admins:string[]
// //   get authentication(){
// //     if(this.auth){
// //         return this.auth
// //     }
// //     throw new Error("Authentication failed....")
// //   }
// //   constructor(id: string, public admins: string[]) {
// //     super(id, "Fronted_Developer");
// //     this.admins=admins
// //   }
// //   addFrontendTeam(name:string){
// //     if(name!=="KK Menon"){
// //         return 
// //     }
// //     this.employee.push(name);
// //   }
// // }

// // const d1 = new FrontedDepartment("Developer",['atul']);
// // console.log(d1);
// // //>>>>>>>>>>>>>>>>>>>>
// // d1.getInfo();
// // //>>>>>>>>>>>>>>>>>>>>
// // d1.addEmployee("abhishek tiwari");
// // d1.addEmployee("rakesh thakur");
// // d1.getEmployeeInfo();
// // //here employee accessible out side of class someone and access it and can make changes
// // //in employee array length. to avoid this we can use private keyword in front of employee array.
// // //d1.employee[2] = "avinash kumar";
// // d1.getEmployeeInfo();

// // //if we want to make read only property for class then we need 'readonly' property


// class Department {
//   // private readonly id: string;
//   // private name: string;
//   static isAvailable: string; //static property
//   protected employees: string[] = [];

//   constructor(protected readonly id: string, public name: string) {
//     // this.id = id;
//     // this.name = n;
//     //this.isavailable =isavailable
//     console.log(Department.isAvailable);
//   }

//   getITDInfo() {
//     console.log(this.id);
//   }
//   //static method and we can access without new keyword
//   static helperToCreateEmployee(name: string) {
//     return { name };
//   }

//   describe(this: Department) {
//     console.log(`Department (${this.id}): ${this.name}`);
//   }

//   addEmployee(employee: string) {
//     // validation etc
//     // this.id = 'd2';
//     this.employees.push(employee);
//   }

//   printEmployeeInformation() {
//     console.log(this.employees.length);
//     console.log(this.employees);
//   }
// }

// class ITDepartment extends Department {
//   admins: string[];
//   constructor(id: string, admins: string[]) {
//     super(id, 'IT');
//     this.admins = admins;
//   }
  
// }

// class AccountingDepartment extends Department {
//   private lastReport: string;

//   //getter 
//   get mostRecentReport() {
//     if (this.lastReport) {
//       return this.lastReport;
//     }
//     throw new Error('No report found.');
//   }

//   set mostRecentReport(value: string) {
//     if (!value) {
//       throw new Error('Please pass in a valid value!');
//     }
//     this.addReport(value);
//   }

//   constructor(id: string, private reports: string[]) {
//     super(id, 'Accounting');
//     this.lastReport = reports[0];
//   }

//   addEmployee(name: string) {
//     if (name === 'Max') {
//       return;
//     }
//     this.employees.push(name);
//   }

//   addReport(text: string) {
//     this.reports.push(text);
//     this.lastReport = text;
//   }

//   printReports() {
//     console.log(this.reports);
//   }
// }

// const emp1 = Department.helperToCreateEmployee('kajal')
// //console.log(emp1, emp1.isAvailable);

// const it = new ITDepartment('d1', ['Max']);

// it.addEmployee('Max');
// it.addEmployee('Manu');

// // it.employees[2] = 'Anna';

// it.describe();
// it.name = 'NEW NAME';
// it.printEmployeeInformation();

// console.log(it);

// const accounting = new AccountingDepartment('d2', []);

// accounting.mostRecentReport = 'Year End Report';
// accounting.addReport('Something went wrong...');
// console.log(accounting.mostRecentReport);

// accounting.addEmployee('Max');
// accounting.addEmployee('Manu');

// accounting.printReports();
// accounting.printEmployeeInformation();

// // const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// // accountingCopy.describe();


abstract class Department {
  // private readonly id: string;
  // private name: string;
  static isAvailable: string; //static property
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
    //this.isavailable =isavailable
    console.log(Department.isAvailable);
  }

  abstract getITDInfo(this:Department):void
  //static method and we can access without new keyword
  static helperToCreateEmployee(name: string) {
    return { name };
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    // validation etc
    // this.id = 'd2';
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
    getITDInfo(){
     console.log(this.id)
    } 
}

class AccountingDepartment extends Department {
  private lastReport: string;

  //getter
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  getITDInfo() {
    console.log(this.id);
  }
  
  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const emp1 = Department.helperToCreateEmployee('kajal')
//console.log(emp1, emp1.isAvailable);

const it = new ITDepartment('d1', ['Max']);

it.addEmployee('Max');
it.addEmployee('Manu');

// it.employees[2] = 'Anna';

it.describe();
it.name = 'NEW NAME';
it.printEmployeeInformation();

console.log(it);

const accounting = new AccountingDepartment('d2', []);

accounting.mostRecentReport = 'Year End Report';
accounting.addReport('Something went wrong...');
console.log(accounting.mostRecentReport);

accounting.addEmployee('Max');
accounting.addEmployee('Manu');

accounting.printReports();
accounting.printEmployeeInformation();

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe();
