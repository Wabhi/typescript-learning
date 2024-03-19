"use strict";
const strings = ["name", "email"];
const numbers = [1, 2];
function countAndDescribe(element) {
    let describeText = "there is no value";
    if (element.length === 1) {
        describeText = "Got one element";
    }
    else {
        describeText = "Got " + element.length + " elements.";
    }
    return [element, describeText];
}
console.log(countAndDescribe("Hi abhishek ! how are you ?"));
console.log(countAndDescribe(["abhishek", "tiwar"]));
console.log(countAndDescribe(""));
function extractAndPrint(object, key) {
    return "Value is " + object[key];
}
console.log(extractAndPrint({ name: "abhishek " }, "name"));
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
const numberStorage = new DataStorage();
function createCourseGoal(title, goal, complete) {
    let createCourse = {};
    createCourse.title = title;
    createCourse.goal = goal;
    createCourse.complete = complete;
    return createCourse;
}
const names = ['max', 'min'];
names.push('pi');
console.log("names are.............", names);
const newnamearray = ['abhishek', 'ankur'];
//# sourceMappingURL=generics.js.map