// // functions
// // objects

// // arrays -> arrays are objects


// // const student = {
// //     name: "Nikhil",
// //     age: 20,
// //     fees: 200000
// // }

// const student = {};
// student.name = "Nikhil";
// student.age = 20;
// student.fees = 2000000;

// // console.log(student.fees);

// // arr[index]

// // console.log(student)

// // console.log(student["age"]);

// // student.age = 21; // student['age']= 21;
// // console.log(student["age"]);



// var student2 = new Object();
// student2.name = "Avinash";
// student2.age = 20;
// student2.fees = 20000000;
// student2.key = "value";

// // console.log(student2);

// // mutable and non mutable data types


// // object is mutable data types


// var student1 = student2;

// student1.name= "Mansi";
// // console.log(student1.name);
// // console.log(student2.name);

// // home work 
// // deep copy and shallow copy.
// // Changes in student1 should not reflect in student2. (on copying data from student2 to student1).


// // functions
// // if i use a function i will be adding some functionality.

// // it can be user defined or pre-defined

// // function name(parameter1, parameter2, ....... ){
// //     // code 
// // }


// // function my_func(num) { // function definition
// //     let calc = num*14 + 14;
// //     console.log(calc);
// // }

// // void

// // var num1 = 14;

// // if(num1 < 14) {
// //     my_func(num1); // function calling
// //     // let calc = num1*14 + 14;
// //     // console.log(calc);
// //     console.log("Num1 is less than 14.")
// // }
// // else {
// //     my_func(num1);
// //     // let calc = num1*14 + 14;
// //     // console.log(calc);
// //     console.log("Num1 is greater than or equal to 14.")
// // }

// // code is repeating
// // set of code which i want more than once.


// function sum(num1, num2) {
//     let final_sum = num1 + num2;
//     console.log("Statements before return")
//     return final_sum; // number
//     console.log("statements after return");
// }

// number


// function type -> returning type 
// if func is not returning anything => void
// if it is returning something => the returning value's type

// var sum_function_return = sum(10, 5);
// console.log(sum_function_return)


// by default every func is void type
// if there is no return statement -> it is void type




// it will take 1 number as parameter and boolean => isDollar ( true for amount in dollar and false for amount in rupees).
// if the number is in dollars => multiplying it by 100 and then i am gonna print it.
// otherwise I will just print it.
// 1 dollar is 100 rs

function moneyMoney(amount, isDollar) {
    if(isDollar){
        amount = amount * 100;
        // console.log("Amount in rupees ", amount);
        // return;
    }
    console.log("Amount in rupees ", amount);
}

moneyMoney(100, true);
moneyMoney(100, false);


// self calling function
// return statement
// recursion 
// arrow function