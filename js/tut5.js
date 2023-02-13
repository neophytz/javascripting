// var let const
// block and global scopes
// loops

// home work :- bitwise operators




// falsy values of string
// var str = " ";

// // str ==='' or "" => false
// // otherwise true

// // str.length > 0 => true

// if(str){
//     console.log("Hello I am true");
// }
// else {
//     console.log("Hello I am false");
// }


// var num1= 12
// var num2= 2
// console.log(num1**num2) // exponentiation operator


// var str = 'Hello, it\v there';
// console.log(str)




// boolean algebra -> building logic

// && -> and operator
// || ->  or operator
// !  -> not operator



// var num1 = 10;
// var num2 = 14;
// var num3 = 17;




// ---------------------------------------------
// num1                 num2            num3
// num3                 num2            num1



// whether num2 is in between num1 and num3 or not

// num1 <= num2 <= num3 or num1 >= num2 >= num3
// num1 >= num2 as well as num2 >= num3 -> 2
// num1 <= num2 as well as num2 <= num3 -> 1

// if ((num1 <= num2 && num2 <= num3) || (num3 <= num2 && num2 <= num1)){
//     console.log("Success!")
// }
// else console.log("Failure")


// && -> if both cond true then only it will return true
// it will check second condition only when the first is true
// condn 1 condn 2  output
// true    true      true
// true     false    false
// F           T       F
// F           F       F


// || -> if any of two condn is true return true
// it will check second condition only when the first is false
// condn 1 condn 2  output
// true    true      true
// true     false    true
// F           T     true
// F           F     false 


// ! -> change true to false and false to true
// false -> true
// true -> false



var num = 14

// num===15 && console.log("I am 15")
// num===15 || console.log("I am not 15")

// if(num===15) {
//     console.log("I am 15")
// }
// else console.log("I am not 15")