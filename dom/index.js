// read operations (finding elements) -> querySelector

//getElementsByTagName -> array

// var bodyRef = document.getElementsByTagName('title');
// bodyRef[0].style.backgroundColor ="red";
// console.log(bodyRef[0]);

// getElementsByClassName -> array
// var bodyRef = document.getElementsByClassName('body2');
// console.log(bodyRef);


//getElementById -> single element reference
// var bodyRef = document.getElementById('bodyId');
// console.log(bodyRef);
// bodyRef.style.backgroundColor='red';

//getElementsByName -> array

// var eleRef = document.getElementsByName('myH1');
// console.log(eleRef);


// create operations -> innerHTML, innerText

var imageRef = document.createElement('img');
imageRef.setAttribute('src', '../image.jpeg');

var bodyRef = document.getElementById('bodyId');
bodyRef.appendChild(imageRef);

console.log(imageRef);

// check current image kaunsi hai. -> if else
// it will change the image accordingly. -> setAttribute()

// console.log(imageRef.src)

function changeImage () {
    if(imageRef.src === 'http://127.0.0.1:5500/image.jpeg'){
        imageRef.setAttribute('src', '../image2.jpeg');
    }
    else{
        imageRef.setAttribute('src', '../image.jpeg');
    }
}


//homework -> implement button creation with the help of javascript.







// // // getElementById, getElementsByClassName, getElementByClassName

// // var h1Ref = document.getElementById('header');
// // // var btnRef = document.getElementsByTagName('button')[0];
// // // var changeTextBtn = document.getElementById('changeText');


// // // function changeToRed () {
// // //     h1Ref.style.color='red';
// // // }

// // function changeColor(){
// //     // red -> black
// //     // if(h1Ref.style.color==='red'){
// //     //     h1Ref.style.color='black';
// //     // }
// //     // else h1Ref.style.color='red';
// //     // ternary statements
// //     // condition ? (code 1) : (code2)
// //     // h1Ref.style.color==='red' ? h1Ref.style.color='black' : h1Ref.style.color='red';
// //     h1Ref.style.color = h1Ref.style.color==='red' ? 'black' : 'red';
// // }

// // // h1Ref.innerText='goodbye';


// // function changeText (){
// //     h1Ref.innerText='goodBye';
// // }
// // // changeText();
// // // btnRef.onclick='changeToRed()';

// // // console.log(btnRef);
// // // ref.style.color='red';
// // // console.log(ref);


// var couponDivRef = document.getElementById('couponDiv');
// var couponBtnRef = document.getElementById('couponBtn');

// function revealCoupon(){
//     console.log(couponDivRef.innerHTML);
//     couponBtnRef.innerText = !couponDivRef.innerHTML ? 'Click me to hide coupons.' : 'Click me to reveal coupons.';
//     couponDivRef.innerHTML = couponDivRef.innerHTML==='' ? '<p>Hello, you receive new coupon.</p> <p>your coupon code is yts50.</p>' : '';
//     // falsy values
//     // if(couponDivRef.innerHTML===""){
//     //     couponDivRef.innerHTML = '<p>Hello, you receive new coupon.</p> <p>your coupon code is yts50.</p>';
//     //     couponBtnRef.innerText = 'Click me to hide coupons.'
//     // }else{
//     //     couponDivRef.innerHTML = '';
//     //     couponBtnRef.innerText = 'Click me to reveal coupons.'
//     // }
// }

// // homework :- read about getElement...../getElements.....




