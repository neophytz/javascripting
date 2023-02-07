// event is action by a user -> any key stroke, any mouse pointer movement, any click, any hover.
// to listen an event -> we have to add a event listener to that node(reference of any element).

// nodeRef.addEventListener(event type, action ) syntax

var btnRef = document.getElementById('myBtn');

// way 1
// function logHello() {
//     console.log('hello');
// }

// btnRef.addEventListener('click', logHello); // event is click, function -> logHello

// way 2
// btnRef.addEventListener('click', function () { //creating functions without name
//     console.log('hello');
// })

// way 3
// const logArrow = () => console.log('arrow');

// btnRef.addEventListener('click', logArrow);

// way 4
// btnRef.addEventListener('click', () => console.log('arrow')) 


//Homework -> go through https://www.w3schools.com/jsref/dom_obj_event.asp page and done.