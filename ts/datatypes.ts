// syntax of defining variables
// var variable_name : variable_type = variable_value

// number
// var num : number = 14, 0, -1, NaN


// string
// var str: string = 'it is a string';
// var num:number = 14;
// var str: string = num.toString();

//boolean
// var flag: boolean = true // false
// var flag:boolean = Boolean('hello'); // falsy values // Boolean() constructor

// var result = 1;
// var flag:boolean = Boolean(14); //true or false

//arrays
// var arr:number[] = [10,12,14,15];
// var arr:Array<string> =['hello', 'nikhil', 'whatever'];

// var arrayName: typeofElement[] = array_value;
// var arrayName:Array<typeOfElement> = array_value;

// Tuples
// Specific to Typescript only.
// nothing but a fixed sized array.
// student = [studentName, rollNo, age]
// var student:[string, number, number] = ['Nikhil', 86, 20]

// Functions

// function function_name(parameters) {

// } javascript syntax

// function sum(num1:number, num2:number):number {
//     return num1 + num2;
// }

// var sumOfNumber:number = sum(14,14);

// syntax
// function function_name(parameter1: typeOfParameter1, parameter2: typeOfParameter2,....): returnTypeOfFunction {

// }

// void

// function printSum(num1:number, num2:number):void {
//     console.log(num1+num2)
//     // return;
// }


// Arrow Functions

// javascript definition
// const arrowFunction = () => {

// }

// typescript Implementation

// const arrowFunction = (parameter1:typeOfParameter1, parameter2:typeOfParameter2, .....):returnTypeOfFunction => {

// }

// const sum = (num1:number, num2:number):number => {
//     return num1 + num2;
// }


// Objects

// var obj :interface_name = {
//     name:'Nikhil',
//     rollno: 86,
//     isPass: true
// }

// interfaces

// interface interface_name {
//     name:string
//     rollno:number
//     isPass:boolean
// }

// interface Iname {}

// types

// type typeName = {
//     name:string
//     rollno:number
//     isPass:boolean
// }

// union
// adding two or more to create a new
// adding two or more types

// var month:number|string = 'January';
// month=1;

// var arr: Array<number|string> = [14, 'nikhil', 45];

// var arr: number[]|string[] =[14,'nikhil'];

// var test : number|string ='hello';
// var test : number[]|string[] = ['nikhil', 14] // wrong way of doing stuff

// var test : (number|string)[] = ['nikhil', 14] // correct way of doing stuff



// any -> its like removing type from typescript

// var num:any;
// num='hello';
// num=['nikhil', 14, 45, true];
// num= {name:undefined};


const myfunc = (num:number):number => {
    return num;
}
