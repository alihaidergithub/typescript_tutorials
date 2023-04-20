// Basic Types
// Number
let id:number = 6
console.log('ID:',id)

// String
let company: string = 'Verge Future'
console.log('Company:',company)

// Boolean
let isPublished: boolean = true
console.log('Published: ', isPublished)

// Any Type
let x:any = 'Hello'
console.log('Value of x: ', x)

// Arrays
let ids:number[] = [1, 2, 3]
console.log('IDs in Array: ', ids)

// Tuple
let person:[string, number, boolean, any] = ['Ali Haider', 25626, true, 'Thank you!']
console.log("Person Details: ", person)

// Tuple Array
let employee: [number, string][]

employee = [
    [1, 'Brad'],
    [2, 'Ali Haider'],
    [3, 'Sarmad'],
]
console.log('Employees are: ', employee)

// Enumeration
enum Direction{
    Start = 1,
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right',
}
console.log(Direction.Up)

// Objects
type User = {
    id:number,
    name: string,
}

const user: User = {
    id:1,
    name:'Ali Haider',
}
console.log('User is: ', user)

// Type Assertion - 2 types of syntax
let cid: any = 1
    //One
let customerId = <number>cid
console.log(typeof(customerId))
    // Two
let customerId2= cid as string
console.log(typeof(customerId2))

// Functions - return value should be return in number
function addNum(x:number, y:number) : number {
    return x + y 
}
console.log(addNum(3,5))

// Void with Union
function log(message: string | number) : void {
    console.log(message)
}
log('This is a test message')

// Interface
interface UserInterface {
    readonly id:number,
    name:string,
    age?:number
}

const user1: UserInterface = {
    id: 11,
    name:'Ali Haider',
    // ? used with age due to error. If we do not write the age here the compiler will not throw error. 
}
// user1.id=50 // and if we make "ID as readonly" it throws an error the id is readonly property. 
console.log(user1.name)

// Interface with function
interface Mathfunc {
    (x:number, y:number):number
}
const add: Mathfunc = (x,y):number => x + y
console.log(add(10,5))

// Classes
class Person implements UserInterface { //Here class implements as Interface
    id: number
    name: string

    constructor(id:number, name:string){
        this.id=id
        this.name=name
    }

    register(){
        return `${this.name} is now registered`
    }
}

const student = new Person(25626,'Ali Haider')
console.log("Student Details", student as Person)

// Sub-Class
class Employee extends Person { // extends used for making Employee as sub-class of Person class
    position : string

    constructor(id:number, name:string, position:string){
        super(id,name) // Super is used for accessing parent class "Person" attributes
        this.position=position
    }
} 
const emp = new Employee(25626,'Ali Haider','Developer')
console.log(emp)
console.log(emp.register())

// Generics - used for reusable components
// Given example shows the function 
function getArray(items:any[]):any[] {
    return new Array().concat(items)
}
const numArray = getArray([1,2,3])
const strArray = getArray(['Ali',['Developer'],['Mansoob']])
numArray.push('Hello')
// as you can see it should show an error as numArray has integer elements
// tackling this issue we use GENERICS
function getArrayy<T>(itemss:T[]):T[]{
    return new Array().concat(itemss)
}
const numArrayy = getArrayy<number>([1,2,3])
const strArrayy = getArrayy<string>(['Hello','Testing'])
strArrayy.push('Hi')



