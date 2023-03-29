// // implicit type and explicit type
// // implicit -> assumed itself
// // explicit -> defined by user.

// // implicit type
// // var num=14, str:string ="names";
// var num = 14; // implicit type of num is number
// console.log(typeof(num));

// var str: string = "names";
// console.log(str);
// console.log(typeof(str));

// // var newvar:number;
// // newvar = 14;
// // newvar="stirng";


// interface
// interface Student {
//     name:string,
//     rollno:number,
//     class:number
// }

// var student1 :Student = {
//     name:"nikhil",
//     rollno:14,
//     class:4
// }

class Animal {
    species:string;

    constructor (species:string){
        this.species=species;
    }
    walk() {
        console.log("I am walking (animal class)");
    }

    run(){
        console.log("I am running");
    }
}

// class Human extends Animal{
//     // base class -> animal
//     // derived class -> human
//     // case 1 => constructor not required.

//     // definition of properties
//     // name:string = "nikhil";
//     // address:string = "rohini";
//     // gender:string ="male";

//     // Case 2 => using constructor
//     // name:string;
//     // address:string;
//     // gender:string = "male";
    
//     // //constructor function which is optional in nature.
//     // // it is a function being called on creation of new object on its own.
//     // // used once in lifetime of an object

//     // constructor (name:string){
//     //     this.name=name;
//     //     this.address="rohini";
//     //     // this.gender=gender;
//     // }
//     //members or properties
//     name:string = "priya";
//     address:string;
//     gender:string;


//     // constructor
//     constructor (name:string, address:string, gender:string){
//         super("Homo Sapiens");
//         this.name=name;
//         this.address=address;
//         this.gender=gender;
//     }

//     //methods
//     walk() {
//        console.log("I am walking (human class).");
//     }
    // walkAnimal() {
        // super.walk();
    // }
// }

// extends
// derived class and base class

// implements


interface IHuman {
    name:string,
    address:string,
    gender:string
}

// var human : IHuman = {
//     name:"nikhil",
//     address:'rohini',
//     gender:"male"
// }

class Human extends Animal implements IHuman {
    // name:string = "priya";
    // address:string;
    // gender:string;

    name = "temp name";
    address = "temp address";
    gender = "temp gender";

    // constructor
    constructor (name:string, address:string, gender:string){
        super("Homo Sapiens");
        this.name=name;
        this.address=address;
        this.gender=gender;
    }

    //methods
    walkAnimal() {
        super.walk();
    }

    walk() {
        console.log("I am walking (human class).");
    }
}

// creating an object of class
var human1 = new Human("nikhil", "rohini", "male");
human1.walk();
human1.walkAnimal();
console.log(human1.name); //nikhil
console.log(human1.address); //rohini