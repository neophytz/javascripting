// loops
// table of 2 (first 4 lines)
// 2 x 1 = 2

// console.log("2 X 1 = ", 2*1);
// console.log("2 X 2 = ", 2*2);
// console.log("2 X 3 = ", 2*3);
// console.log("2 X 4 = ", 2*4);


// console.log("2 X i = ", 2*i); i is changing variable.


// if we want to iterate on something => loops

// loops -> iterate over set of instructions or statements unless a particular condition is satisfying.

// for loop
// for/in loop
// for/of loop
// forEach loop
// while loop
// do while loop


// for loop

// for (exp 1; exp2; exp3){
//     // statements to be iterated.
// }

// exp 1 => initial condition => start khase hoga... (execute only once)
// exp 2 => the condition whether to run or not => if true then run otherwise break out of loop.
// exp 3 => how variable is gonna change => kitne se bdhega, km hoga ya jo bhi condition hai.

// for(let i = 1; i<=10000; i++){
//     console.log("2 X ", i ," = ", 2*i);
// }

// var i = 1;

// for(;;){ // infinite loop
//     if(i<=10){
//         console.log("2 X", i ,"=", 2*i);
//         i++;   
//     }
//     else break;
//     // console.log("Control inside loop!")
// }
// console.log("Control here!", i); // i=11


// break statement
// continue statement

// for(let i = 2; i<=12; i++){
//     // every number which doesn't divide 140 properly. => print that number.
//     // otherwise print "hello"
//     if(147 % i === 0){
//         console.log("hello");
//         continue; // i===1 it will skip below code for current iteration only.
//         break; // break out of the loop
//         console.log("I am below continue");
//     }
//     console.log(i);
// }
// console.log("control here!")

// for/in loop -> objects;

// var obj = {
//     name:"nikhil",
//     batch:"fsdp",
//     age:19
// }

// for( key_variable in object_name) {
//     // code
// }

// for (x in obj){
//     console.log(x); // key
//     console.log(obj[x]); // value
//     // console.log(obj.x); doesn't works in case of for in loop
// }
// console.log(obj.name);

// var arr = [1,2,3,4,5];

// for(let x in arr) {
//     console.log(x); // indexes
//     console.log(arr[x]); // values
// }


// for/of loop -> for every iteratable data (strings, arrays, maps)

// var name = "Nikhil Gupta";  // string is also iteratable
// for(let i = 0; i < name.length; i++){ // for loop on string type data
//     console.log(name[i]);
// }

// var name = "Nikhil Gupta";
// for(let x of name){
//     console.log(x); // x -> values not indexes
// }

// var arr = [1,14,45,78,98];
// for(let x of arr){
//     console.log(x); // x -> values not indexes
// }

// forEach loop -> arrays

// var arr = [14,45,78,89,123];

// function oddEven(value, index, array) {
//     console.log("value", value);
//     // console.log("index", index);
//     // console.log("array", array);
//     if(value%2===0){
//         console.log("even");
//     }
//     else console.log("odd");
// }

// arr.forEach(oddEven); // it will iterate over array and calls oddeven function

// homework -> read about while and do while loop

// while(condition) {
//     //code
// }

// for(exp1; exp2; exp3){
    // code
// }


// var i = 11;
// // i =1,3,5,7,9,11
// while (i<=10) { // true, true
//     console.log("2 X", i, "=", 2*i); // 2, 6
//     i=i+2; // i+=2;
// }
// console.log(i);

// do {
//     //code
// } while (condition)


// // for the first iteration, it will not check the condition and will run the loop irrespective of the condition
// var i = 11;
// do{
//     console.log("2 X", i, "=", 2*i); // 2, 6
//     i=i+2; // i+=2;
// } while(i<=10)

// var arr = [1,1,1,1,3,4,5];

// set

// var st= new Set(arr);// create a set using array // 1,3,4,5
// console.log(st.size);// find length of set
// st.add(14); //1,3,4,5,14
// st.add(3);  //1,3,4,5,14
// st.add(14); //1,3,4,5,14
// st.add(5);  //1,3,4,5,14
// console.log(st.size);// find length of set

// // 7 existance
// st.delete(7);
// console.log(st.has(14));
// console.log(st.values());