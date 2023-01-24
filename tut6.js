// // var let const
// // block and global scopes
// // arrays


// // var num = 2; // initialize some variable. Superior of all
// // num=4;
// // console.log(num);

// // let num1 = 4;
// // num1=5;
// // console.log(num1);

// // const num2 = 4; // if i use const, i cannot reassign a value to this. (when u don't want to change values)

// // const pi = 3.14;
// // // num2=5;
// // console.log(num2);



// // var num1 = 44;
// // let num2 = 54;


// // // scopes
// // global scope local/block scope
// // console.log(num4);
// // if(true) {
// //     let num3 = 41; // block scoped or local scoped
// //     // console.log(num3);
// //     var num4 = 45; // global scoped it can be accessed from anywhere.
// // }
// // else {
// //     console.log("hello");
// // }

// // // console.log(num3);
// // console.log(num4);






// var arr = ['nikhil', 'mansi', 'tanmay'];
// //indexing    0         1          2

// // console.log(arr[0]); //getting element using index.


// var arr1 = [];
// arr1[0]= 'nikhil';
// arr1[1]= 'mansi';
// arr1[2]= 'tanmay';

// // console.log(arr1[0]);


// var arr2 = new Array('nikhil', 'mansi', 'tanmay');
// // console.log(arr2[2]);

// // console.log(typeof(arr2)); // object

// // var obj = {key : value, key2 : value, }

// // console.log(obj.key)

var arr3 = ['nikhil', 'gupta', 45, 19] // 1d array
// console.log(arr3[0])
// console.log(arr3[2])


// var arr4 = ['nikhil', ['gupta', 'mansi', 'tanmay', 'prakash']] // multi-dimensional array

// console.log(arr4[1][3])



// var arr3 = ['nikhil', 'gupta', 45, 19] // 1d array


// push() method
// arr3.push('hello')
// console.log(arr3)


// length method
// console.log(arr3.length)

//accessing last element of array
// console.log(arr3[arr3.length - 1])

// toString method
// var convertedToString = arr3.toString();
// console.log(convertedToString)

// console.log(convertedToString.split(','))


// '' + arr3[0] + arr3[1] ....... arr[len-1]




// join method

// console.log(arr3.join(' '))


// pop method
// console.log(arr3);
// console.log(arr3.pop()) // removes the last element out of array
// console.log(arr3);

//shift method
// console.log(arr3.shift()); // removes element from the starting
// console.log(arr3)

// var arr4 = []

//unshift method
// arr3.unshift('element0');
// console.log(arr3);

// delete method
// delete arr3[0]; // make holes in array
// console.log(arr3[0]);


var arr1 = [10, 14, 15];
var arr2 = [14, 45, 56];

console.log(arr1.concat(arr2));
console.log(arr1);
console.log(arr2);