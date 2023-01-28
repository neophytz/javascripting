// deep copy and shallow copy

// deep copy => we copy reference of some other DS
// shallow copy => we only copy the value



// var num = 14; //1000dfdd0fsd (memory address)
// var num2 = num; // value copy and new memory address assigned to num2

// if num2 = same memory address 1000dfdd0fsd


// var obj = {
//     name:"nikhil",
//     age:20,
//     time: "22:00"
// }

// var cpy = obj; // deep copy (copy by reference / copying the address)

// cpy.name= "tanmay";

// console.log(obj);

// Shallow copy

// var shallowCopy = Object.assign({} , obj);
// console.log(shallowCopy);

// shallowCopy.name = "tanmay";

// console.log(obj);
// console.log(shallowCopy);

// spread operator (...)

// var shallowCopy = {...obj , name: 'tanmay'}; // shallow copy of obj

// shallowCopy.batch = "2023";

// console.log(shallowCopy);

// shallowCopy.name = "tanmay";
// console.log(obj);
// console.log(shallowCopy);


// var obj = {
//     name:"nikhil",
//     age:20,
//     time: "22:00",
//     education:{
//         college:"DTU",
//         school:"school"
//     }
// }

// var cpy = {...obj, education: {...obj.education}}; // Shallow Copies in case of nested objects

// cpy.education.college = "DSEU";
// cpy.name = "tanmay";
// console.log(cpy);
// console.log(obj);

// arrays are objects

// var x = [1,2,3,4];

// // var y = x; // deepcopy

// // y[2] = 14;
// // console.log(y);
// // console.log(x);


// var z = [...x]; // shallow copy
// z[2] = 14;
// console.log(x, z);



// function
// which will take a value.
// console.log('odd') or console.log('even');

// function oddEven( value ) {
//     if( value%2 ){ 
//         console.log("odd");
//         return;
//     }
//     console.log("even");
// }

// oddEven(41);
// oddEven(-14);

// value % 2 = 1 -> true or 0 -> false


// self-invoking or self-calling function

// (function (parameters){
//     // code
// })(arguments)


(function() {
    console.log("Hello World!");
})()

// wish();


// (function (num1, num2){
//     console.log(num1+num2)
// })(4,1)