// function func(){
//     // return optional
// }
// func()

// (function(parameters) {
//     code
// })(arguments)


// arguments -> globally defined variables/ values and stuff;

// window, document, name -> gloabally defined variables
// document object model (DOM)

// (function(x){
//     var temp = 14;
//     //variables
//     window.temp = temp;
//     //functions
//     function print(){
//         console.log("I am printing!");
//     }
    
//     window.print= print;
//     console.log(x);
// })("Hello World!", window);

// print();
// console.log(typeof(temp));


// function func(){
//     console.log("Hello World");
//     var temp1 = 14;
// }
// func();

// console.log(temp1);



// self-invoking function
// prompt -> prompt() to give his username
// prompt -> to give his password.
// username is nikhil
// password is password
// check if these values are same -> welcome alert
// otherwise -> alert Invalid username / password.

// var userName= 'Nikhil';
// var password= "password";

// (function(userName, password) {
//     // console.log(userName);
//     // console.log(password);
//     var uname = prompt("Please enter your username.");
//     var pass = prompt("Please enter your password.");
//     // var userName="temp3";
//     if(userName===uname && pass===password){ // nearest local scope variable temp3, temp2
//         alert("Welcome");
//     }
//     else{
//         alert("Invalid Username/Password..");
//     }
// })("temp", "temp2");


// Home work 1 :- learn about use cases of self calling function -> modules -> self calling.

// arrow functions (ES6) defining function like a variable

// function name () {
    
// }

// const name = (parameters) => {
    // code
// }

// name(parameters)

// Home work 2 :- learn about "this" keyword in case of functions javascript.
// Home work 3 :- learn about difference between normal and arrow functions.

// const hello = () => {
//     console.log("Hello world!");
// }
const hello = () => console.log("Hello world!");

hello()

// const sum = (a,b) => {
//     return a+b;
// }

const sum = (a,b) => a+b

// const logger = (x) => console.log(x);
const logger = x => console.log(x)

logger("I want to log you!!")

var total = sum(4,7);
console.log(total);