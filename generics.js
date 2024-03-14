//generic functions................................................................
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//const name: Array<string> =['name','email']
var strings = ["name", "email"];
var numbers = [1, 2];
function countAndDescribe(element) {
    var describeText = "there is no value";
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
// function extractAndPrint<T extends object,U extends keyof T>(object:T,key:U){
//     return 'Value is ' + object[key]
// }
// extractAndPrint({},'abhishek')
function extractAndPrint(object, key) {
    return "Value is " + object[key];
}
console.log(extractAndPrint({ name: "abhishek " }, "name"));
//generic classes................................................................
var DataStorage = /** @class */ (function () {
    function DataStorage() {
        this.data = [];
    }
    DataStorage.prototype.addItem = function (item) {
        this.data.push(item);
    };
    DataStorage.prototype.removeItem = function (item) {
        this.data.splice(this.data.indexOf(item), 1);
    };
    DataStorage.prototype.getItems = function () {
        return __spreadArray([], this.data, true);
    };
    return DataStorage;
}());
var textStorage = new DataStorage();
//textStorage.addItem('ddhdh')
//textStorage.addItem(10)
// textStorage.addItem('abhishek')
// textStorage.addItem('ankur')
// console.log(textStorage.getItems());
//console.log();
var numberStorage = new DataStorage();
function createCourseGoal(title, goal, complete) {
    var createCourse = {};
    createCourse.title = title;
    createCourse.goal = goal;
    createCourse.complete = complete;
    return createCourse;
}
//readonly.........
var names = ['max', 'min'];
names.push('pi');
console.log("names are.............", names);
//it will add 'pi' in names array but we don't want to do it we want to scrict the name array.
var newnamearray = ['abhishek', 'ankur'];
//newnamearray.push('atul')
//it won't let you to push the new name in newnamesarray because it is readonly.
//generic types vs union types
