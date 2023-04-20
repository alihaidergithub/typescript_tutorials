"use strict";
// Basic Types
// Number
let id = 6;
console.log('ID:', id);
// String
let company = 'Verge Future';
console.log('Company:', company);
// Boolean
let isPublished = true;
console.log('Published: ', isPublished);
// Any Type
let x = 'Hello';
console.log('Value of x: ', x);
// Arrays
let ids = [1, 2, 3];
console.log('IDs in Array: ', ids);
// Tuple
let person = ['Ali Haider', 25626, true, 'Thank you!'];
console.log("Person Details: ", person);
// Tuple Array
let employee;
employee = [
    [1, 'Brad'],
    [2, 'Ali Haider'],
    [3, 'Sarmad'],
];
console.log('Employees are: ', employee);
// Enumeration
var Direction;
(function (Direction) {
    Direction[Direction["Start"] = 1] = "Start";
    Direction["Up"] = "Up";
    Direction["Down"] = "Down";
    Direction["Left"] = "Left";
    Direction["Right"] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Up);
const user = {
    id: 1,
    name: 'Ali Haider',
};
console.log('User is: ', user);
// Type Assertion - 2 types of syntax
let cid = 1;
//One
let customerId = cid;
console.log(typeof (customerId));
// Two
let customerId2 = cid;
console.log(typeof (customerId2));
// Functions - return value should be return in number
function addNum(x, y) {
    return x + y;
}
console.log(addNum(3, 5));
// Void with Union
function log(message) {
    console.log(message);
}
log('This is a test message');
const user1 = {
    id: 11,
    name: 'Ali Haider',
    // ? used with age due to error. If we do not write the age here the compiler will not throw error. 
};
// user1.id=50 // and if we make "ID as readonly" it throws an error the id is readonly property. 
console.log(user1.name);
const add = (x, y) => x + y;
console.log(add(10, 5));
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const student = new Person(25626, 'Ali Haider');
console.log("Student Details", student);
// Sub-Class
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name); // Super is used for accessing parent class "Person" attributes
        this.position = position;
    }
}
const emp = new Employee(25626, 'Ali Haider', 'Developer');
console.log(emp);
console.log(emp.register());
// Generics - used for reusable components
// Given example shows the function 
function getArray(items) {
    return new Array().concat(items);
}
const numArray = getArray([1, 2, 3]);
const strArray = getArray(['Ali', ['Developer'], ['Mansoob']]);
numArray.push('Hello');
// as you can see it should show an error as numArray has integer elements
// tackling this issue we use GENERICS
function getArrayy(itemss) {
    return new Array().concat(itemss);
}
const numArrayy = getArrayy([1, 2, 3]);
const strArrayy = getArrayy(['Hello', 'Testing']);
strArrayy.push('Hi');
