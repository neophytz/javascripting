// syntax var /const/let variable_name : expectedType = assignedValue;
var num:number = 14;
var num1:number = parseInt(prompt('Enter a number')!); // ! -> we are assuming that user will always enter a string.
var num2:number = parseInt(prompt("Enter second number")!);

// prompt -> string or null
// parseInt -> string
// null -> not convertable or not acceptable as a parameter of type string.


alert(num1 + num2);


var obj :{
    name:string,
    isPresent:boolean,
    age:number,
    hell?:string //optional
} = {
    name:"nikhil",
    isPresent:true,
    age:19,
}
obj.hell = 'hello';

console.log(obj.hell);