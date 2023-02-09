// // event listener tut2


//mouseover

var bodyRef= document.getElementsByTagName('body')[0];

document.getElementsByClassName('parentDiv')[0].addEventListener('mouseover', ()=>{
    bodyRef.style.backgroundColor='white';
})

document.getElementById('red').addEventListener('mouseover', (event)=>{
    console.log(event);
    bodyRef.style.backgroundColor='red';
})

document.getElementById('blue').addEventListener('mouseover', (event)=>{
    console.log(event);
    bodyRef.style.backgroundColor='blue';
})

document.getElementById('yellow').addEventListener('mouseover', (event)=>{
    console.log(event);
    bodyRef.style.backgroundColor='yellow';
})

document.getElementById('green').addEventListener('mouseover', (event)=>{
    console.log(event);
    bodyRef.style.backgroundColor='green';
})







// var addBtn = document.getElementById('addEL');
// var removeBtn = document.getElementById('removeEL');


// var flag = false; // there is no event listener.
// var bodyRef = document.getElementsByTagName('body')[0];


// const myFunc = (event) =>{ 
//     flag=!flag;
//     if(event.key==='r'){
//         bodyRef.style.backgroundColor='red';
//     }
//     else if (event.key==='w'){
//         bodyRef.style.backgroundColor='white';
//     }
//     else{
//         bodyRef.style.backgroundColor='yellow';
//     }
//     // console.log(event);
//     // console.log('I am added')
// }


// addBtn.addEventListener('click', () => {
//     //add a onkeydown event listener.
//     if(flag){
//         return;
//     }
//     document.addEventListener('keydown', myFunc)
// });
// removeBtn.addEventListener('click', () => {
//     //remove the onkeydown event listener.
//     if(!flag){
//         return;
//     }
//     document.removeEventListener('keydown', myFunc)
// });







// // event is action by a user -> any key stroke, any mouse pointer movement, any click, any hover.
// // to listen an event -> we have to add a event listener to that node(reference of any element).

// // nodeRef.addEventListener(event type, action ) syntax

// // var btnRef = document.getElementById('myBtn');

// // way 1
// // function logHello() {
// //     console.log('hello');
// // }

// // btnRef.addEventListener('click', logHello); // event is click, function -> logHello

// // way 2
// // btnRef.addEventListener('click', function () { //creating functions without name
// //     console.log('hello');
// // })

// // way 3
// // const logArrow = () => console.log('arrow');

// // btnRef.addEventListener('click', logArrow);

// // way 4
// // btnRef.addEventListener('click', () => console.log('arrow')) 


// //Homework -> go through https://www.w3schools.com/jsref/dom_obj_event.asp page and done.